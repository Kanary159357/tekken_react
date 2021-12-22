import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { logOut, signInWithGoogle } from '../../firebaseInit';
import Button from '../base/Button';
import Icon from '../base/Icon';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { FontColor, Palette } from '../../styles/theme';
import { RootState } from '../../store/store';
import { isEmpty } from '../../utils/isEmpty';
const UserProfileBox = styled.div<{ user: any }>`
    height: ${(props) => props.user === '150px' && '100px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: ${(props) => props.user && 'pointer'};
    margin-bottom: 10px;
`;

const ProfileImg = styled.div`
    border-radius: 25px;
    width: 60px;
    height: 60px;
    font-size: 45px;
    text-align: center;
    overflow: hidden;
    .image {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .temp {
        width: 100%;
        height: 100%;
        background-color: ${Palette.white_1};
    }
`;

const UserBox = styled.div`
    margin-top: 10px;
    color: ${FontColor.white};
`;

const UserControlBox = styled.div`
    margin-top: 10px;
`;
const UserProfile = () => {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const isUser = isEmpty(user);
    return (
        <UserProfileBox
            user={isUser}
            onClick={isUser ? signInWithGoogle : undefined}
        >
            <ProfileImg>
                {!isUser ? (
                    <div className={'image'}>
                        <Image
                            src={user?.photoURL}
                            alt={'userImg'}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ) : (
                    <Icon icon={faUserCircle} />
                )}
            </ProfileImg>
            <UserBox>{isUser ? '로그인하세요' : user?.displayName}</UserBox>
            <UserControlBox>
                {!isUser && (
                    <Button backColor={Palette.gray_2} onClick={logOut}>
                        로그아웃
                    </Button>
                )}
            </UserControlBox>
        </UserProfileBox>
    );
};

export default UserProfile;
