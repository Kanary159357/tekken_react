import styled from 'styled-components';
import { Device, FontColor, Palette } from '../../../styles/theme';
const Description = styled.div`
    width: calc(100% - 200px);
    padding-left: 150px;
    @media ${Device.desktop} {
        padding-left: 50px;
    }
    @media ${Device.tablet} {
        padding-left: 10px;
    }
    .main {
        font-size: 60px;
        position: relative;
        color: ${FontColor.black};
        width: 100%;
        @media ${Device.desktop} {
            font-size: 40px;
        }
    }
    .sub {
        margin-top: 50px;
        font-size: 30px;
    }
`;

const Highlighted = styled.span<{ color?: string }>`
    box-shadow: ${(props) => (props.color ? props.color : Palette.black_2)};
    background: ${(props) => (props.color ? props.color : Palette.black_2)};
    color: ${FontColor.white};
`;

const SiteDescription = () => {
    return (
        <Description>
            <div className="main">
                <div className="box">
                    <Highlighted>철권 정보</Highlighted> 찾기 너무 불편해서
                </div>
                <div className="box">
                    <Highlighted>남코가</Highlighted> 일을 제대로 안해서
                </div>
                <div className="box">
                    <Highlighted>그래서 만들었습니다</Highlighted>
                </div>
            </div>
            <div className="sub">
                6N23RP는 철권 7FR의 캐릭터들의 정보를 손쉽게 열람 및 수정할 수
                있는 사이트입니다.
            </div>
        </Description>
    );
};

export default SiteDescription;
