export interface Image {
    id: number;
    webformatURL: string;
    largeImageURL: string;
}

export interface ImageGalleryProps {
    images: Image[];
    onImageClick: (largeImageURL: string) => void;
}
