import { DefaultTheme } from 'styled-components';
import { FontSizeProps, paletteProps } from '../types/styled';

const calcRem = (size: number) => `${size / 16}rem`;

export const FontSize: FontSizeProps = {
    small: calcRem(12),
    big: calcRem(16),
    base: calcRem(14),
};

export const palette: paletteProps = {
    white_1: '#efefef',
    border_1: '#d1d1d1',
    font_white: '#ffffff',
    icon_red_1: '#ff937d',
    icon_red_2: '#b35440',
    icon_green_1: '#b1e36f',
    icon_green_2: '#93ad74',
    gray_1: '',
    gray_2: '#c9c9c9',
};

const customTheme: DefaultTheme = {
    FontSize,
    palette,
};

export default customTheme;
