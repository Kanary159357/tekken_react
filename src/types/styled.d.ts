import 'styled-components';

export interface paletteProps {
    white_1: string;
    gray_1: string;
    gray_2: string;
    border_1: string;
    icon_red_1: string;
    icon_red_2: string;
    icon_green_1: string;
    icon_green_2: string;
    font_white: string;
}

export interface FontSizeProps {
    [key: string]: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: paletteProps;
        FontSize: FontSizeProps;
    }
}
