export interface Category {
    id: number;
    title: string;
}

export interface Question {
    id: number;
    title: string;
    preview?: string;
    body: string;
    format: string;
    release_date: string;
    expiration_date: string;
    difficulty: string;
    categories: Category[];
    answer?: string;
    imgSrc?: string;
    imgAlt?: string;
}
