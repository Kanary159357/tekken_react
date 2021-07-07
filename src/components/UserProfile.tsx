import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useUserData } from '../Context/UserContext';
import { logOut, signInWithGoogle } from '../firebaseInit';
import Button from '../styles/Button';
import Icon from '../styles/Icon';
const UserProfileBox = styled.div<{ user: any }>`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: ${(props) => props.user === null && 'pointer'};
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
        background-color: #ffffff;
    }
`;

const UserBox = styled.div`
    margin-top: 10px;
    color: #ffffff;
`;

const UserControlBox = styled.div`
    margin-top: 10px;
`;
const UserProfile = () => {
    const user = useUserData();
    return (
        <UserProfileBox user={user}>
            <ProfileImg onClick={signInWithGoogle}>
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
                {user && <Button onClick={logOut}>로그아웃</Button>}
            </UserControlBox>
        </UserProfileBox>
    );
};

export default UserProfile;
