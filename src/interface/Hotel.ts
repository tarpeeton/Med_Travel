export interface IHotel {
    id: string;
    name: string;
    location: {
        ru: string;
        uz: string;
        en: string;
    };
    service: {
        id: string;
        name: {
            ru: string;
            uz: string;
            en: string;
        };
        icon: {
            _type: "image";
            asset: {
                _type: "reference";
                _ref: string;
            };
        };
    }[];
    price: number;
    availableFrom: string;
    availableTo: string;
    photo: {
        _type: "image";
        asset: {
            _type: "reference";
            _ref: string;
        };
    };
    adultsSize: number;
    childrenSize: number;
    orderNum?: number;
    active?: boolean;
    score?: number;
    rating?: number;
    createdAt: string;
    updatedAt: string;
}
