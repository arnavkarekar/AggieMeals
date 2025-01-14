/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#500000'; // TAMU Maroon
const tintColorDark = '#500000';

export const Maroon = "#500000"
export const BrightMaroon = "#770020"

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ececec',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: BrightMaroon,
    itemHighlight: 'white'
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: "white", // Maroon is not that visible
    itemHighlight: 'rgb(40, 40, 40)'
  },
};
