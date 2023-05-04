export type SearchVacancyParams = {
    page?: string;
    sortBy?: string;
    order?: string;
    category?: string;
    search?: string;
    currentPage?: string;
}


export type VacancyList = {
    objects: Vacancy[];
}

export type Vacancy = {
        profession: string;
        firm_name: string;
        town_title: string;
        catalogues_title: string;
        type_of_work_title: string;
        payment_to: number;
        payment_from: number;
        currency: number;

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
    status: 'loading' | 'success' | 'error';
}