import React from 'react';
import styled from 'styled-components';
import { Palette } from '../styles/theme';

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    svg {
        z-index: 9999;
    }
`;

const WithoutWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    svg {
        z-index: 9999;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: ${Palette.overlay};
`;

const LoadingWithOverlay = () => {
    return (
        <>
            <Wrapper>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                >
                    <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke="#e15b64"
                        strokeWidth="10"
                        r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                        ></animateTransform>
                    </circle>
                </svg>
            </Wrapper>
            <Overlay />
        </>
    );
};

const LoadingWithoutOverlay = () => {
    return (
        <>
            <WithoutWrapper>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                >
                    <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        stroke={Palette.red_1}
                        stroke-width="10"
                        r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                        ></animateTransform>
                    </circle>
                </svg>
            </WithoutWrapper>
        </>
    );
};
export { LoadingWithOverlay, LoadingWithoutOverlay };
