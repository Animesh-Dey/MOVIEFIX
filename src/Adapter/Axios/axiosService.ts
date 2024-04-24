import { axiosInstance } from './axiosInstance';

class APIServices {
    //Normal API CALL-----------------------------------------------
    getCall = async <T>(endpoint: string): Promise<T> => {
        try {
            const response = await axiosInstance.get<T>(endpoint);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    postCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.post<T>(endpoint, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    patchCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.patch<T>(endpoint, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    putCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.put<T>(endpoint, body);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    deleteCall = async <T>(endpoint: string): Promise<T> => {
        try {
            const response = await axiosInstance.delete<T>(endpoint);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    //Multipart ---------------------------------------------------------------
    postMultipartCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.post<T>(endpoint, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    patchMultipartCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.patch<T>(endpoint, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    putMultipartCall = async <T, B>(endpoint: string, body: B): Promise<T> => {
        try {
            const response = await axiosInstance.put<T>(endpoint, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
}

export const apiServices = new APIServices();
