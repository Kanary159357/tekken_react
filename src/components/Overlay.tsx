import react

const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: ${Palette.overlay};
    @media ${Device.desktop} {
        background: ${Palette.white_1};
    }
`;


const Overlay = () => {};

export default Overlay;
