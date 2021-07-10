import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useUserData } from '../Context/UserContext';
import { logOut, signInWithGoogle } from '../firebaseInit';
import Button from '../styles/Button';
import Icon from '../styles/Icon';
import { FontColor, Palette } from '../styles/theme';
const UserProfileBox = styled.div<{ user: any }>`
    height: ${(props) => props.user === '150px' && '100px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: ${(props) => props.user === null && 'pointer'};
    margin-bottom: 10px;
`;

const ProfileImg = styled.div`
    border-radius: 25px;
    width: 60px;
    height: 60px;
    font-size: 45px;
    text-align: center;
    overflow: hidden;
    img {
        object-fit: cover;
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
    const user = useUserData();
    return (
        <UserProfileBox
            user={user}
            onClick={user === null ? signInWithGoogle : undefined}
        >
            <ProfileImg>
                {user ? (
                    <img src={user?.photoURL} alt={'userImg'} />
                ) : (
                    <Icon icon={faUserCircle} />
                )}
            </ProfileImg>
            <UserBox>
                {user === null ? '로그인하세요' : user?.displayName}
            </UserBox>
            <UserControlBox>
                {user && (
                    <Button backColor={Palette.gray_2} onClick={logOut}>
                        로그아웃
                    </Button>
                )}
            </UserControlBox>
        </UserProfileBox>
    );
};

export default UserProfile;
