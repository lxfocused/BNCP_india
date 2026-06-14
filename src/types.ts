export interface NewsItem {
  id: string;
  titleEn: string;
  titleHi: string;
  date: string;
  categoryEn: string;
  categoryHi: string;
  contentEn: string;
  contentHi: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
}

export interface FounderSettings {
  nameEn: string;
  nameHi: string;
  roleEn: string;
  roleHi: string;
  messageEn: string;
  messageHi: string;
  portraitUrl: string;
}

export interface SocialLinks {
  whatsapp: string;
  twitter: string;
  youtube: string;
  facebook: string;
}

export interface Member {
  id: string; // Unique Member Serial: BNCP-2026-XXXXXX
  fullName: string;
  mobile: string;
  age: number;
  state: string;
  district: string;
  constituency: string;
  joinedAt: string;
}

export interface Grievance {
  id: string; // Ticket No: BNCP-HELP-XXXX
  citizenName: string;
  mobile: string;
  email: string;
  categoryEn: string;
  categoryHi: string;
  subject: string;
  description: string;
  status: 'PENDING' | 'INVESTIGATING' | 'RESOLVED';
  createdAt: string;
  notes?: string;
}

export interface AppState {
  news: NewsItem[];
  gallery: GalleryImage[];
  founder: FounderSettings;
  socials: SocialLinks;
  members: Member[];
  grievances: Grievance[];
  analytics: {
    sessionsCount: number;
    actionsTriggered: number;
    ledgersGenerated: number;
  };
}

export type Section = 'home' | 'about' | 'vision' | 'founder' | 'media' | 'join' | 'contact';
export type Language = 'en' | 'hi';
