import 'styled-components';

export interface paletteProps {
    white_1: string;
    border_1: string;
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
