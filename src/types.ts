export interface Category {
    id: number;
    title: string;
}

export interface Question {
    id: number;
    title: string;
    body: string;
    format: string;
    releaseDate: string;
    expirationDate: string;
    difficulty: string;
    categories: Category[];
    answer?: string;
    imgSrc?: string;
    imgAlt?: string;
}
