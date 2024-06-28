export interface Photo {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    small: string;
    full: string;
  };
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
