export type SearchVacancyParams = {
    categoryId?: string;
    sortBy?: string;
    order?: string;
    paymentFrom?: string;
    paymentTo?: string;
    search?: string;
    currentPage?: number;
    id?: string;
}

export type VacancyList = {
    objects: Vacancy[];
    total: number;
}

export type FavouritesList = {
    items: VacancyMainParams[];
}

export type Vacancy = {
        profession: string;
        firm_name: string;
        town: {
            title: string;
        }
        type_of_work: {
            title: string;
        }
        catalogues_title: string;
        payment_to: number;
        payment_from: number;
        vacancyRichText?: any;
        id: string;
}

export type VacancyMainParams = {
    profession: string;
    payment_to: number;
    payment_from: number;
    town_title: string;
    type_of_work_title: string;
    id: string;
}

export type AccessToken = {
    access_token: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface VacancySliceState {
    items: Vacancy[];
    item: Vacancy;
    status: 'loading' | 'success' | 'error';
    total: number;
}