export interface Filters {
    fromAddress: string;
    toAddress: string;
    fromDate?: string;
    toDate?: string;
    adultSize: number;
    childrenSize: number;
    priceFrom?: number;
    priceTo?: number;
    typeId: number
  }