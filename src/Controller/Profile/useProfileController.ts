import { apiServices } from '../../Adapter/Axios/axiosService';
import { ProfileModel } from '../../Model/Profile/useProfileModel';
import { ErrorMethods } from '../../Utils/ErrorHandler';
type ProfileData = {
    name: string;
    email: string;
};

export const useProfileController = (profileModel: ProfileModel) => {
    //API calls must be start with _exampleOf()
    const _fetchProfile = async (userId: string) => {
        try {
            const profileData = await apiServices.getCall<ProfileData>('/user/' + userId);
            return profileData;
        } catch (err) {
            ErrorMethods.errorHandler(err);
        }
    };

    //API calls must be start with _exampleOf()
    const _updateProfile = async (userId: string, updatedData: ProfileData) => {
        try {
            const response = await apiServices.patchCall<ProfileData, ProfileData>('/user/' + userId, updatedData);
            return response;
        } catch (err) {
            ErrorMethods.errorHandler(err);
        }
    };
};
