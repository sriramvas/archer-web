export default async function handler(request, response) {
  try {
    // Fetch BTC price from CoinGecko with API key
    const apiKey = process.env.COINGECKO_API_KEY;
    const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&names=Bitcoin&symbols=btc&precision=1&x_cg_demo_api_key=${apiKey}`;
    
    const res = await fetch(url, { method: 'GET' });
    const data = await res.json();
    
    // The response format is {"bitcoin":{"usd":64979.6}}
    const btcPrice = data.bitcoin.usd;

    // Store this in your database or cache
    // For example, using Vercel KV or your own database
    // await db.set('btc-price', btcPrice);

    response.status(200).json({ success: true, price: btcPrice });
  } catch (error) {
    response.status(500).json({ error: 'Failed to update BTC price' });
  }
}
