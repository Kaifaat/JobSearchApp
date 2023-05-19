export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export type CategoryList = {
    items: string;
}

export interface FilterSliceState {
    items: CategoryList[],
    status: 'loading' | 'success' | 'error',
    searchValue: string,
    categoryId: string,
    paymentFrom: string,
    paymentTo: string,
    currentPage: number,
    // sort: Sort
}