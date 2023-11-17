export interface Path {
  value: string;
  label: string;
}

export type Theme = 'light' | 'dark';

export interface FolderStructure {
  name?: string;
  isDir: boolean;
  isLink?: boolean;
  links?: {
    [key: string]: string;
  },
  children?: {
    [key: string]: FolderStructure
  }
}

export interface Position {
  x: number;
  y: number;
}

export class HttpException extends Error {
  body: any;
  constructor(body: any) {
    super();
    this.body = body;
  }
}