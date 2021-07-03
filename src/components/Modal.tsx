import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import { useModalData } from '../Context/ModalContext';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9997;
    background: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
    background: #efefef;
    width: 500px;
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
    margin-top: 30px;
    .title {
        font-size: 18px;
        font-weight: 700;
        color: #757575;
    }
    .description {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 18px;
    }
`;

const ModalControl = styled.div`
    display: flex;
`;

const ControlContent = styled.div`
    margin-left: auto;
    display: flex;
`;

const CustomButton = styled(Button)`
    margin-left: 10px;
`;

const Modal = () => {
    const { setModal } = useModalData();

    const CloseModal = () => {
        setModal(false);
    };

    return (
        <>
            <ModalBox>
                <div className="box">
                    <ModalContent>
                        <div className="title">엄마의 따듯한 집밥</div>
                        <div className="description">
                            버튼을 누르면 지금 당장 먹을수 있습니다
                        </div>
                    </ModalContent>
                    <ModalControl>
                        <ControlContent>
                            <CustomButton>Yes</CustomButton>
                            <CustomButton onClick={CloseModal}>No</CustomButton>
                        </ControlContent>
                    </ModalControl>
                </div>
            </ModalBox>
            <Overlay
                onClick={() => {
                    setModal(false);
                }}
            ></Overlay>
        </>
    );
};

export default Modal;
