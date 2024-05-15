

export interface Photo {
    id: string;
    description: string | null;
    alt_description: string | null;
    urls: {
      regular: string;
      small: string;
    };
    likes: number;
    user: {
      name: string;
    };
  }
export type Photos = Photo[];

export type Response = {
  total: number;
  total_pages: number;
  results: Photos;
}