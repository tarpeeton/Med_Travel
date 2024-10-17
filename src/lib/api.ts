import axios from 'axios';
import {  ApiResponse  , TourQueryOptions} from '@/interface/Tour';
const BASE_URL = 'https://med-travel.mrjtrade.uz';




export const question = async (name: string, phone: string, email: string, question: string) => {
  try {
    // Send POST request with the form data
    const response = await axios.post(`${BASE_URL}/api/application/question`, {
      name,
      phone,
      email,
      question,
    });

    // Optionally, return response data or handle it further
    return response.data;
  } catch (error) {
    console.error("Error sending question:", error);
    // Optionally, throw the error or handle it in some other way
    throw error;
  }
};
export const consultation = async (name: string, phone: string, email: string) => {
  try {
    // Send POST request with the form data
    const response = await axios.post(`${BASE_URL}/api/application/consultation`, {
      name,
      phone,
      email,
    });

    // Optionally, return response data or handle it further
    return response.data;
  } catch (error) {
    console.error("Error sending question:", error);
    // Optionally, throw the error or handle it in some other way
    throw error;
  }
};

export const AllService = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/clinic/service`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};
export const AllReviews = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/client-review`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};

export const allClinick = async (acceptLanguage: string = 'en', name?: string, serviceId?: string) => {
    try {
        const params: any = {};

        if (name) {
            params.name = name; // Add name if provided
        }

        // If serviceId exists, set it as a query parameter
        if (serviceId) {
            params.serviceId = serviceId; // Use the comma-separated serviceId string
        }

        const response = await axios.get(`${BASE_URL}/api/clinic`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
            params, // Dynamically created params
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};




export const AllTours = async (acceptLanguage: string = 'en', options: TourQueryOptions = {}): Promise<ApiResponse> => {
    try {
        // Destructure and set default values for parameters
        const {
            fromAddress,
            toAddress,
            toDate,
            adultSize,
            childrenSize,
            priceFrom,
            priceTo,
            typeId,
            fromDate
        } = options;

        // Initialize params object, adding properties conditionally
        const params: Record<string, any> = {};

        if (fromAddress) params.fromAddress = fromAddress;
        if (toAddress) params.toAddress = toAddress;
        if (toDate) params.toDate = toDate;
        if (adultSize) params.adultSize = adultSize;
        if (childrenSize) params.childrenSize = childrenSize;
        if (priceFrom) params.priceFrom = priceFrom;
        if (priceTo) params.priceTo = priceTo;
        if (typeId) params.typeId = typeId;
        if (fromDate) params.fromDate = fromDate;

        // Make the API call with optional language header and query parameters
        const response = await axios.get<ApiResponse>(`${BASE_URL}/api/tour`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
            params,
        });

        return response.data; // Return the API response data
    } catch (error) {
        console.error('Error fetching tours:', error);
        throw error; // Re-throw the error for external handling
    }
};
export const AllTypes = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/tour/type`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};
export const RandomGallery = async (size: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/tour/gallery`, {
            params: {
                size: size,
            },
        });

        // Return the gallery data
        return response.data;
    } catch (error) {
        console.error("Error fetching gallery:", error);
        throw error;
    }
};



// SANATHORIUMS

export const AllSanathoriumGoal = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/sanatorium/goal`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};


interface IAllSanathorimFilter {
    name?: string;
    goalId?: string;
}


export const AllSanathoriums = async (acceptLanguage: string = 'en', options: IAllSanathorimFilter = {}) => {
    try {
        // Destructure and set default values for parameters
        const {
            name, // Destructure name
            goalId,
        } = options;

        // Initialize params object, adding properties conditionally
        const params: Record<string, any> = {};

        if (name) params.name = name; // Include name if provided
        if (goalId) params.goalId = goalId; // Include goalId if provided

        // Make the API call with optional language header and query parameters
        const response = await axios.get(`${BASE_URL}/api/sanatorium`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
            params,
        });

        return response.data; // Return the API response data
    } catch (error) {
        console.error('Error fetching tours:', error);
        throw error; // Re-throw the error for external handling
    }
};



// PROMOTIONS



export const Allpromotions = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/promotion`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};


// ALL BLOG TYPE
// 

export const AllBlogType = async (acceptLanguage: string = 'ru') => {
    try {
       
        const response = await axios.get(`${BASE_URL}/api/blog/type`, {
            headers: {
                'Accept-Language': acceptLanguage,
            },
        });

        // Return the clinic data
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};
