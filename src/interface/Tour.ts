export interface Tour {
    id: number;
    name: string
    fromAddress: string
    toAddress: string
    fromDate: string;
    toDate: string;
    price: number;
    mainPhoto: {
        id: number;
        url: string;
    };
    gallery: Array<{
        id: number;
        url: string;
    }>;
    type: {
        id: number;
        name: {
            uz: string;
            ru: string;
            en: string;
        };
        orderNum: number;
        active: boolean | null;
    };
    adultSize: number;
    childrenSize: number;
}

export interface ApiResponse {
    message: string;
    data: Tour[];
}


export interface TourQueryOptions {
    fromAddress?: string;
    toAddress?: string;
    fromDate?: string;
    toDate?: string;
    adultSize?: number;
    childrenSize?: number;
    priceFrom?: number;
    priceTo?: number;
    typeId?: number;
}
