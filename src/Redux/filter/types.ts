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
}