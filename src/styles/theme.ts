const calcRem = (size: number) => `${size / 16}rem`;

export const FontSize = {
    small: calcRem(12),
    big: calcRem(16),
    base: calcRem(14),
};

export const FontColor = {
    black: '#333333',
    white: '#ffffff',
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
    black_1: '#212529',
    black_2: '#333333',
    white_1: '#ffffff',
    white_2: '#efefef',
    border_1: '#d1d1d1',
    red_1: '#ff937d',
    red_2: '#b35440',
    red_3: '#b33a20',
    green_1: '#b1e36f',
    green_2: '#93ad74',
    gray_1: '#c9c9c9',
    gray_2: '#8a8a8a',
    gray_3: '#525252',
    overlay: 'rgba(0, 0, 0, 0.6)',
};
