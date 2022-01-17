import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { logoutUser, setUser } from '../store/slice/userReducer';
import nookies from 'nookies';
import { useDispatch } from 'react-redux';

const useAuthObserver = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onIdTokenChanged(async (user) => {
            if (user == null) {
                dispatch(logoutUser());
                nookies.destroy(null, 'token');
            } else {
                const token = await user.getIdToken();
                dispatch(setUser(user));
                nookies.destroy(null, 'token');
                nookies.set(undefined, 'token', token, { path: '/' });
            }
        });
    });
};

export default useAuthObserver;
