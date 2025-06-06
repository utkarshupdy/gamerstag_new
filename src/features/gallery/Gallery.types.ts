interface Gallery{
    title: string;
    slug: {current: string};
    images: {
        imageUrl: string;
        url : string;
    }[],
}

export interface GalleryProps{
    gallery: Gallery[]
}