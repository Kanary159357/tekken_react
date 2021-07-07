const calcRem = (size: number) => `${size / 16}rem`;

export const FontSize = {
    small: calcRem(12),
    big: calcRem(16),
    base: calcRem(14),
};

export const BreakPoint = {
    mobile: '720px',
    tablet: '768px',
    desktop: '1140px',
};

export const Device = {
    mobile: `(max-width: ${BreakPoint.mobile})`,
    tablet: `(max-width: ${BreakPoint.tablet})`,
    desktop: `(max-width: ${BreakPoint.desktop})`,
};

export const Palette = {
    white_1: '#ffffff',
    border_1: '#d1d1d1',
    font_white: '#ffffff',
    icon_red_1: '#ff937d',
    icon_red_2: '#b35440',
    icon_green_1: '#b1e36f',
    icon_green_2: '#93ad74',
    gray_1: '#c9c9c9',
    gray_2: '#8a8a8a',
};
