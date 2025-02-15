import { LucideIcon } from 'lucide-react';

// Type for Shloka data
export interface ShlokaData {
  sanskrit: string;
  transliteration: string;
  meaning: string;
  source: string;
}

// Type for QuickLink component props
export interface QuickLinkProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description?: string;
  color?: string;
}

// Type for SidebarLink component props
export interface SidebarLinkProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  color?: string;
}

// Type for recent sites
export interface RecentSite {
  url: string;
  title: string;
  favicon?: string;
}