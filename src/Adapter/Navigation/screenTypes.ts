// -----------------------SCREENS-------------------------------
export enum Screens {
    //--------------Splash Screen --------------------
    Splash = 'Splash',
}

export type ScreenParamList = {
    [Screens.Splash]: undefined; // undefined because there is no data passed through Routes.Params //
};
