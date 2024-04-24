// -----------------------SCREENS-------------------------------
export enum Screens {
  //--------------Splash Screen --------------------
  Splash = 'Splash',
  //--------------Home Screen --------------------
  Home = 'Home',
}

export type ScreenParamList = {
  [Screens.Splash]: undefined; // undefined because there is no data passed through Routes.Params //
  [Screens.Home]: undefined; // undefined because there is no data passed through Routes.Params //
};
