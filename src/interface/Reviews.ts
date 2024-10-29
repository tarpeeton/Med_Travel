export interface ReviewProps {
    _id: string;
    createdAt: string;
    name: string;
    comment: {
        uz: string;
        en: string;
        ru: string;
    };
    image?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
}
