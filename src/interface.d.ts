export interface Note {
  id: string;
  url: string;
  title: string;
  content: string;
  faviconUrl: string;
  updatedAt: string;
}

export type NewNote = Omit<Note, 'id'>
