import { useEffect, useState } from 'react';
import { ColorValue } from 'react-native';
import { ThemeType } from './themeSlice';
import { COLORS_NAME_WITH_THEME, ColorName } from './ColorCombination';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNativeTheme } from './useNativeTheme';

export type Colors = { [key in ColorName]: ColorValue };

export const useColors = () => {
    const theme = useNativeTheme();
    const [colorObject, setColorObject] = useState<Colors | undefined>(() => fetchAllColorsWrtTheme(ThemeType.LIGHT));

    //fetch all colors with respet to theme
    // eslint-disable-next-line @typescript-eslint/no-shadow
    function fetchAllColorsWrtTheme(theme: ThemeType): Colors | undefined {
        //find out current theme index
        let colorObj: Colors | undefined;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        const themeIndex: number = COLORS_NAME_WITH_THEME[0].findIndex(theme_name => theme_name === theme);
        if (themeIndex !== -1) {
            COLORS_NAME_WITH_THEME.forEach((color_code_with_name, index) => {
                if (index !== 0) {
                    const color_name = color_code_with_name[0] as ColorName;
                    const color_code = color_code_with_name[themeIndex] as ColorValue;
                    if (colorObj) {
                        colorObj[color_name] = color_code;
                    } else {
                        colorObj = { [color_name]: color_code } as {
                            [key in ColorName]: ColorValue;
                        };
                    }
                }
            });
        }
        return colorObj;
    }

    const curr_theme = theme.getCurrentTheme();
    useEffect(() => {
        const colorObj = fetchAllColorsWrtTheme(curr_theme);
        setColorObject(colorObj);
    }, [curr_theme]);

    return colorObject;
};
