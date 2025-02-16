import { ReactNode } from 'react';

export interface ThemeColor {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  accent: string;
}

export interface BackgroundImage {
  id: string;
  title: string;
  url: string;
  source: 'Mahabharata' | 'Ramayana' | 'Vedic Scriptures' | 'Hindu Mythology';
  photographer?: string;
}

export interface ShlokaData {
  sanskrit: string;
  transliteration: string;
  meaning: string;
  source: string;
}

export interface QuickLinkProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export interface SidebarLinkProps {
  icon: ReactNode;
  title: string;
  color?: string;
}