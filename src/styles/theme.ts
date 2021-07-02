import { css, DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const FontSize = {
    small: calcRem(14),
    big: calcRem(16),
};

const colors = {
    white_1: '#efefef',
    border_1: '#d1d1d1',
};

const theme = {
    FontSize,
    colors,
};

export default theme;
