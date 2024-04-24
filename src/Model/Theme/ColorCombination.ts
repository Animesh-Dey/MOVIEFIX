/* eslint-disable prettier/prettier */
import { ThemeType } from './themeSlice';

export enum ColorName {
    default_001 = 'default_001',
    default_002 = 'default_002',

    secondary_001 = 'secondary_001',
    secondary_002 = 'secondary_002',

    danger_001 = 'danger_001',
    danger_002 = 'danger_002',

    // warning_001 = 'warning_001',
}

export const COLORS_NAME_WITH_THEME: (string | ThemeType | ColorName)[][] = [
    //====================================================================
    ['colors_name',             ThemeType.LIGHT,   ThemeType.DARK],
    //====================================================================
    [ColorName.default_001,    '#00AEEF',         '#00AEEF'],
    [ColorName.default_002,    '#006F99',         '#006F99'],

    [ColorName.secondary_001,  '#FFFFFF',         '#FF0000'],
    [ColorName.secondary_002,  '#EEEEEE',         '#EEEEEE'],

    [ColorName.danger_001,     '#FF0000',         '#FF0000'],
    [ColorName.danger_002,     '#D90000',         '#D90000'],
];
