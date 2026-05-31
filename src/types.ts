import { ReactNode } from 'react';

export interface PlaybookSection {
  id: string;
  title: string;
}

export interface PlaybookCard {
  id: string;
  sectionId: string;
  title: string;
  preview: string;
  content: string;
}
