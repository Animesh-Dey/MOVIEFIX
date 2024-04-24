import { useAppDispatch } from '../../Adapter/Redux/useAppDispatch';
import { useAppSelector } from '../../Adapter/Redux/useAppSelector';
import { ThemeType, themeSlice } from './themeSlice';

export const useNativeTheme = () => {
    const { updateTheme } = themeSlice.actions;
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme.themePreference);

    const getCurrentTheme = () => {
        return theme;
    };

    const setTheme = (updatedTheme: ThemeType) => {
        dispatch(updateTheme(updatedTheme));
    };

    return {
        getCurrentTheme,
        setTheme,
    };
};
