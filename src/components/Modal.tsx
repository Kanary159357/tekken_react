import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import { useModalData, useModalDispatch } from '../Context/ModalContext';
import {
    AddData,
    DeleteData,
    EditData,
    LoadData,
} from '../Context/DBContextFunc';

import CustomIcon from '../styles/Icon';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontColor, Palette } from '../styles/theme';
import { signInWithGoogle } from '../firebaseInit';
import { useUserData } from '../Context/UserContext';
import { useDBDispatch } from '../Context/DBContext';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9997;
    background: ${Palette.overlay};
`;

const ModalBox = styled.div`
    background: ${Palette.white_2};
    min-width: 400px;
    width: 30%;
    max-width: 500px;
    height: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    top: 30%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -30%);
    z-index: 99999;
    .box {
        margin: 0 40px;
        height: 100%;
        position: relative;
    }
`;

const ModalContent = styled.div`
    padding-top: 20px;
    font-size: 50px;
    .description {
        font-size: 18px;
        font-weight: 700;
        padding-top: 30px;
        color: ${FontColor.black};
    }
`;

const ModalControl = styled.div`
    display: flex;
    padding-top: 20px;
`;

const ControlContent = styled.div`
    margin-left: auto;
    display: flex;
`;

const CustomButton = styled(Button)`
    margin-left: 10px;
`;

const Modal = () => {
    const { modalAction, props } = useModalData();
    const modalDispatch = useModalDispatch();
    const dbDispatch = useDBDispatch();
    const user = useUserData()!;
    const CloseModal = () => {
        modalDispatch({ type: 'SET', payload: false });
    };
    const { description, values, oldvalues, charName } = props;
    const ModalAction = async () => {
        if (user === null) {
            signInWithGoogle();
            CloseModal();
            return;
        }
        console.log(user);
        const { uid } = user;
        switch (modalAction) {
            case 'add':
                await AddData(description, values, charName, uid);
                await LoadData(charName, dbDispatch);
                break;
            case 'delete':
                await DeleteData(description, values, charName, uid);
                await LoadData(charName, dbDispatch);
                break;
            case 'edit':
                await EditData(description, oldvalues!, values, charName, uid);
                await LoadData(charName, dbDispatch);
                break;
            default:
                alert('알수 없는 행동입니다!');
                break;
        }
        CloseModal();
    };
    const modalText: { [key: string]: { description: string } } = {
        add: {
            description: '추가하시겠습니까?',
        },
        delete: {
            description: '삭제하시겠습니까?',
        },
        edit: {
            description: '수정하시겠습니까?',
        },
        notuser: {
            description: '정보를 수정하기 위해서는 로그인해야합니다',
        },
    };
    return (
        <>
            <ModalBox>
                <div className="box">
                    <ModalContent>
                        <CustomIcon
                            icon={faExclamationTriangle}
                            color={Palette.red_1}
                        />

                        <div className="description">
                            {modalText[modalAction].description}
                        </div>
                    </ModalContent>
                    <ModalControl>
                        <ControlContent>
                            <CustomButton
                                backColor={Palette.red_1}
                                onClick={ModalAction}
                                hoverColor={Palette.red_2}
                            >
                                Yes
                            </CustomButton>
                            <CustomButton onClick={CloseModal}>No</CustomButton>
                        </ControlContent>
                    </ModalControl>
                </div>
            </ModalBox>
            <Overlay onClick={CloseModal}></Overlay>
        </>
    );
};

export default Modal;
