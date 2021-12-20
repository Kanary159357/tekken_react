import { getAuth } from 'firebase/auth';
import React, { useState, useEffect, createContext, useContext } from 'react';
import nookies from 'nookies';
interface UserProps {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
}
const UserContext = createContext<UserProps | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = getAuth();

    const [user, setUser] = useState<UserProps | null>(null);
    useEffect(() => {
        auth.onIdTokenChanged(async (user: any) => {
            if (user === null) {
                setUser(null);
                nookies.set(undefined, 'token', '', { path: '/' });
            } else {
                const token = await user.getIdToken();
                setUser(user);
                nookies.set(undefined, 'token', token, { path: '/' });
            }
        });
    }, [auth]);
    useEffect(() => {
        const handle = setInterval(async () => {
            const user = auth.currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000 * 12);

        // clean up setInterval
        return () => clearInterval(handle);
    }, [auth.currentUser]);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;

export function useUserData() {
    const data = useContext(UserContext);
    return data;
}
