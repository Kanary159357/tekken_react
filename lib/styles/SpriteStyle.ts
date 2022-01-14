import styled, { css } from 'styled-components';
import { default as sprite } from './sprite.json';

const dcFrame = sprite.frames['dc.png'].frame;
const youtubeFrame = sprite.frames['youtube.png'].frame;
const iconFrame = sprite.frames['nneo.png'].frame;

export const DCImage = styled.div`
    width: ${dcFrame.w + 'px'};
    height: ${dcFrame.h + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${dcFrame.x}px ${dcFrame.y}px`};
`;

export const DCHalfImage = styled.div`
    width: ${dcFrame.w / 2 + 'px'};
    height: ${dcFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${dcFrame.x / 2}px ${dcFrame.y / 2}px`};
    background-size: 200%;
`;
export const YoutubeImage = styled.div`
    width: ${youtubeFrame.w / 2 + 'px'};
    height: ${youtubeFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${youtubeFrame.x / 2}px ${youtubeFrame.y / 2}px`};
`;
export const YoutubeHalfImage = styled.div`
    width: ${youtubeFrame.w / 2 + 'px'};
    height: ${youtubeFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${youtubeFrame.x / 2}px ${youtubeFrame.y / 2}px`};
    background-size: 200%;
`;
export const IconImage = styled.div`
    width: ${iconFrame.w / 2 + 'px'};
    height: ${iconFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${iconFrame.x / 2}px ${iconFrame.y / 2}px`};
`;
