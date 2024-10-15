import axios from 'axios';


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
