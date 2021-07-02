import { DefaultTheme } from 'styled-components';
import { FontSizeProps, paletteProps } from '../types/styled';

const calcRem = (size: number) => `${size / 16}rem`;

const FontSize: FontSizeProps = {
    small: calcRem(12),
    big: calcRem(16),
    base: calcRem(14),
};

const palette: paletteProps = {
    white_1: '#efefef',
    border_1: '#d1d1d1',
    font_white: '#ffffff',
};

const customTheme: DefaultTheme = {
    FontSize,
    palette,
};

export default customTheme;
