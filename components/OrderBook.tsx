import React, { useState, useEffect, useMemo } from 'react';

interface OrderRow {
  price: string;
  amount: string;
  total: string;
}

const OrderBook: React.FC = () => {
  const [time, setTime] = useState(Date.now());
  const [highlight, setHighlight] = useState<boolean>(false);
  const [currentPrice, setCurrentPrice] = useState<number>(65000);

  // Fetch BTC Price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch('/api/update-btc-price');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.price) {
            setCurrentPrice(data.price);
          }
        }
      } catch (error) {
        // Fallback to default/last price on error (do nothing)
        console.error('Failed to fetch BTC price, using fallback');
      }
    };

    fetchPrice();
    // Optional: Poll every minute if desired, but user only asked for initial fetch logic based on cron
  }, []);

  // Animation ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
      setHighlight(prev => !prev);
    }, 150); // Fast tick for "live" feel
    return () => clearInterval(interval);
  }, []);

  // Generate deterministic but seemingly random data based on time
  const generateData = (startPrice: number, isAsk: boolean, tick: number) => {
    const rows: OrderRow[] = [];
    let currentPrice = startPrice;
    let cumulative = 0;
    const count = 18; // Slightly reduced count for cleaner look

    for (let i = 0; i < count; i++) {
      // Create some movement based on tick
      const noise = Math.sin(tick * 0.002 + i) * 0.05;
      
      const priceStep = 0.1 + (Math.abs(Math.sin(i * 123.12)) * 0.3);
      currentPrice = isAsk ? currentPrice + priceStep : currentPrice - priceStep;
      
      const amountBase = Math.abs(Math.cos(i * 45.3 + tick * 0.005));
      const amount = amountBase * 2 + 0.1;
      cumulative += amount;

      rows.push({
        price: currentPrice.toFixed(1),
        amount: amount.toFixed(8),
        total: cumulative.toFixed(8)
      });
    }
    return isAsk ? rows.reverse() : rows;
  };

  // Memoize data generation
  const asks = useMemo(() => generateData(currentPrice + 0.1, true, time), [currentPrice, Math.floor(time / 300)]);
  const bids = useMemo(() => generateData(currentPrice - 0.1, false, time), [currentPrice, Math.floor(time / 300)]);

  // Generate SVG path for the depth chart
  const generateChartPath = (isAsk: boolean, data: OrderRow[]) => {
    const width = 120; // Width of chart area
    const height = 400; // Height reference
    const stepY = height / data.length;
    
    let d = `M 0 ${isAsk ? 0 : 0} `; 
    
    data.forEach((row, i) => {
        const val = parseFloat(row.total);
        const x = Math.min((val / 20) * width, width); // Scale to width
        const y = i * stepY;
        d += `L ${x} ${y} L ${x} ${y + stepY} `;
    });

    d += `L 0 ${height} Z`; // Close path back to left
    return d;
  };

  const askPath = useMemo(() => generateChartPath(true, asks), [asks]);
  const bidPath = useMemo(() => generateChartPath(false, bids), [bids]);

  return (
    <div className="relative w-full h-full bg-black/50 backdrop-blur-sm font-mono text-[10px] sm:text-xs overflow-hidden select-none">
        
        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        <div className="flex flex-col h-full relative z-10 p-3">
            
            {/* TOP HALF: ASKS (RED) */}
            <div className="flex-1 flex relative overflow-hidden items-end">
                {/* Chart Layer */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20">
                     <svg width="100%" height="100%" preserveAspectRatio="none" className="transform scale-y-100">
                        <path d={askPath} fill="red" stroke="red" vectorEffect="non-scaling-stroke" strokeWidth="1" />
                     </svg>
                </div>
                
                {/* Numbers Layer */}
                <div className="w-full flex justify-end gap-4 sm:gap-6 px-2 pb-1">
                    <div className="flex flex-col text-right text-red-500 font-medium tracking-tight w-full leading-tight">
                        {asks.map((row, i) => (
                            <div key={i} className="flex justify-end gap-4 sm:gap-6 py-[1px]">
                                <span className="text-gray-600 w-16 sm:w-20 opacity-50">{row.total}</span>
                                <span className="text-gray-400 w-16 sm:w-16 opacity-70 hidden sm:block">{row.amount}</span>
                                <span className="w-12 sm:w-14">{row.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CENTER: CURRENT PRICE */}
            <div className="h-14 sm:h-16 border-y border-white/5 bg-white/5 flex items-center justify-between px-4 sm:px-6 my-2 relative backdrop-blur-md">
                 <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-[#5DFAA5]' : 'bg-green-900'} transition-colors duration-100`} />
                    <span className="text-white text-xl sm:text-2xl font-display tracking-widest">{currentPrice.toFixed(1)} <span className="text-sm text-gray-400 font-sans">USD</span></span>
                 </div>
                 <div className="text-[10px] text-gray-500 tracking-widest font-sans uppercase">
                    Index Price
                 </div>
            </div>

            {/* BOTTOM HALF: BIDS (GREEN/MINT) */}
            <div className="flex-1 flex relative overflow-hidden items-start">
                {/* Chart Layer */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20">
                     <svg width="100%" height="100%" preserveAspectRatio="none">
                        <path d={bidPath} fill="#5DFAA5" stroke="#5DFAA5" vectorEffect="non-scaling-stroke" strokeWidth="1" />
                     </svg>
                </div>

                {/* Numbers Layer */}
                <div className="w-full flex justify-end gap-4 sm:gap-6 px-2 pt-1">
                     <div className="flex flex-col text-right text-[#5DFAA5] font-medium tracking-tight w-full leading-tight">
                        {bids.map((row, i) => (
                            <div key={i} className="flex justify-end gap-4 sm:gap-6 py-[1px]">
                                <span className="text-gray-600 w-16 sm:w-20 opacity-50">{row.total}</span>
                                <span className="text-gray-400 w-16 sm:w-16 opacity-70 hidden sm:block">{row.amount}</span>
                                <span className="w-12 sm:w-14">{row.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrderBook;
