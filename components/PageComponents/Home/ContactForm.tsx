import {
    faEnvelope,
    faBug,
    faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Palette, FontColor, Device } from '../../../styles/theme';
import CustomIcon from '../../base/Icon';

const Form = styled.div`
    margin-left: auto;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${Device.tablet} {
        margin-top: 30px;
        width: 100%;
        height: 300px;
        flex-direction: row;
    }
`;

const FormItem = styled.div<{ color?: string }>`
    width: 125px;
    height: 150px;
    cursor: pointer;
    div {
        box-shadow: 3px 4px 2px -2px #b8b8b8;
        width: 100px;
        height: 100px;
        background: ${(props) => (props.color ? props.color : Palette.red_1)};
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s ease-in-out;
        font-size: 40px;
    }
    div:hover {
        transform: scale(1.01);
    }
    p {
        padding-left: 10px;
    }
    a {
        &,
        &:visited,
        &:active {
            text-decoration: none;
            color: ${FontColor.black};
        }
    }
`;

const ContactForm = () => {
    return (
        <Form>
            <FormItem color={Palette.red_1}>
                <a
                    href="https://forms.gle/Dz5QWXdzrskYXJjm7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>
                        {' '}
                        <CustomIcon icon={faBug} />
                    </div>
                    <p>버그리포트</p>
                </a>
            </FormItem>
            <FormItem color={Palette.green_1}>
                <a
                    href="https://forms.gle/ZRnAUuoNbMiGjZu8A"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>
                        <CustomIcon icon={faBullhorn} />
                    </div>
                    <p>건의사항</p>
                </a>
            </FormItem>
            <FormItem color={Palette.gray_1}>
                <a
                    href="mailto:ddasfasd123@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>
                        <CustomIcon icon={faEnvelope} />
                    </div>
                    <p>정보 복구 및 기타 문의</p>
                </a>
            </FormItem>
        </Form>
    );
};

export default ContactForm;
