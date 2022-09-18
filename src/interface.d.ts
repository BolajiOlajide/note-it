export interface Note {
  id: string;
  url: string;
  title: string;
  content: string;
  faviconUrl: string;
  updatedAt: number;
}

export type NewNote = Omit<Note, 'id'>
