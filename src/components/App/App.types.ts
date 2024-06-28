export interface Image {
    id: string;
    webformatURL: string;
    largeImageURL: string;
    description?: string;
  }
  
  export interface AppState {
    images: Image[];
    query: string;
    page: number;
    isLoading: boolean;
    error: string | null;
    showModal: boolean;
    largeImageURL: string;
  }
  
  export interface SearchParams {
    query: string;
    page: number;
  }
  