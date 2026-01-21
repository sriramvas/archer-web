export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerProps {
  name: string;
  logoPath?: string; // In a real app, this would be an SVG path or image URL
}

export interface LabelPointProps {
  textLeft: string;
  textRight: string;
  top: string;
  left?: string;
  right?: string;
  align?: 'left' | 'right';
}
