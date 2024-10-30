export interface Tour {
    _id: string; // Since "_id" seems to be a unique identifier of type string in the data
    name: {
        ru: string;
        uz: string;
        en: string;
    };
    fromAddress: {
        ru: string;
        uz: string;
        en: string;
    };
    toAddress: {
        ru: string;
        uz: string;
        en: string;
    };
    fromDate: string;
    toDate: string;
    price: number;
    mainPhoto: {
        _type: "image";
        asset: {
            _ref: string; // Reference to the image asset
            _type: "reference";
        };
    };
    gallery: Array<{
        _type: "image";
        asset: {
            _ref: string; // Reference to the image asset
            _type: "reference";
        };
    }>;
    category: {
        _ref: string;
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
    typeId?: string;
}
