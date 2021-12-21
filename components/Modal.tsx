import React from 'react';
import styled from 'styled-components';
import Button from './base/Button';

import CustomIcon from './base/Icon';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Device, FontColor, Palette } from '../styles/theme';
import { signInWithGoogle } from '../firebaseInit';
import Overlay from './Overlay';
import useAddCharDataQuery from '../hooks/query/useAddCharDataQuery';
import useDeleteCharDataQuery from '../hooks/query/useDeleteCharDataQuery';
import useEditCharDataQuery from '../hooks/query/useEditCharDataQuery';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { isEmpty } from '../utils/isEmpty';
import {
    closeDialog,
    confirmDialog,
    declineDialog,
} from '../store/slice/dialogReducer';

const ModalBox = styled.div`
    background: ${Palette.white_2};
    min-width: 400px;
    width: 35%;
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
        font-size: 16px;
        font-weight: 700;
        padding-top: 20px;
        color: ${FontColor.black};
        @media ${Device.desktop} {
            font-size: 15px;
        }
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
    const { dialog } = useSelector((state: RootState) => state.dialogReducer);
    const dispatch = useDispatch();
    const CloseModal = () => {
        dispatch(closeDialog());
    };
    const DeclineModal = () => {
        dispatch(declineDialog());
    };
    const ConfirmModal = () => {
        dispatch(confirmDialog());
    };

    return (
        <>
            <>
                <ModalBox>
                    <div className="box">
                        <ModalContent>
                            <CustomIcon
                                icon={faExclamationTriangle}
                                color={Palette.red_1}
                            />

                            <div className="description">{dialog.content}</div>
                        </ModalContent>
                        <ModalControl>
                            <ControlContent>
                                <CustomButton
                                    backColor={Palette.red_1}
                                    onClick={ConfirmModal}
                                    hoverColor={Palette.red_2}
                                >
                                    Yes
                                </CustomButton>
                                <CustomButton onClick={DeclineModal}>
                                    No
                                </CustomButton>
                            </ControlContent>
                        </ModalControl>
                    </div>
                </ModalBox>
                <Overlay func={CloseModal} />
            </>
        </>
    );
};

export default Modal;
