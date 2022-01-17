import styled, { css } from 'styled-components';
import { default as sprite } from './sprite.json';

const dcFrame = sprite.frames['dc.png'].frame;
const youtubeFrame = sprite.frames['youtube.png'].frame;
const iconFrame = sprite.frames['nneo.png'].frame;
const Frame1Frame = sprite.frames['Frame1.png'].frame;
const Frame2Frame = sprite.frames['Frame2.png'].frame;
const fullSize = sprite.meta.size;
export const DCImage = styled.div`
    width: ${dcFrame.w + 'px'};
    height: ${dcFrame.h + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`-${dcFrame.x}px -${dcFrame.y}px`};
`;

export const DCHalfImage = styled.div`
    width: ${dcFrame.w / 2 + 'px'};
    height: ${dcFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`-${dcFrame.x / 2}px -${dcFrame.y / 2}px`};
    background-size: ${`${(fullSize.w / dcFrame.w) * 100}%
        ${(fullSize.h / dcFrame.h) * 100}%`};
`;
export const YoutubeImage = styled.div`
    width: ${youtubeFrame.w + 'px'};
    height: ${youtubeFrame.h + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`-${youtubeFrame.x}px -${youtubeFrame.y}px`};
`;
export const YoutubeHalfImage = styled.div`
    width: ${youtubeFrame.w / 2 + 'px'};
    height: ${youtubeFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${-youtubeFrame.x / 2}px ${-youtubeFrame.y / 2}px`};
    background-size: ${`${(fullSize.w / youtubeFrame.w) * 100}%
        ${(fullSize.h / youtubeFrame.h) * 100}%`};
    background-repeat: no-repeat;
`;
export const Frame1Image = styled.div`
    width: ${Frame1Frame.w + 'px'};
    height: ${Frame1Frame.h + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`-${Frame1Frame.x}px -${Frame1Frame.y}px`};
`;
export const Frame1HalfImage = styled.div`
    width: ${Frame1Frame.w / 2 + 'px'};
    height: ${Frame1Frame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${-Frame1Frame.x / 2}px ${-Frame1Frame.y / 2}px`};
    background-size: ${`${(fullSize.w / Frame1Frame.w) * 100}%
        ${(fullSize.h / Frame1Frame.h) * 100}%`};
    background-repeat: no-repeat;
`;
export const Frame2Image = styled.div`
    width: ${Frame2Frame.w + 'px'};
    height: ${Frame2Frame.h + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`-${Frame2Frame.x}px -${Frame2Frame.y}px`};
`;
export const Frame2HalfImage = styled.div`
    width: ${Frame2Frame.w / 2 + 'px'};
    height: ${Frame2Frame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${-Frame2Frame.x / 2}px ${-Frame2Frame.y / 2}px`};
    background-size: ${`${(fullSize.w / Frame2Frame.w) * 100}%
        ${(fullSize.h / Frame2Frame.h) * 100}%`};
    background-repeat: no-repeat;
`;
export const IconImage = styled.div`
    width: ${iconFrame.w / 2 + 'px'};
    height: ${iconFrame.h / 2 + 'px'};
    background-image: url('/spritesmith-generated/sprite.png');
    background-position: ${`${iconFrame.x / 2}px ${iconFrame.y / 2}px`};
`;
