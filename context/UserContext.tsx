import { getAuth } from 'firebase/auth';
import React, { useState, useEffect, createContext, useContext } from 'react';

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
        auth.onAuthStateChanged(async (tempUser: any) => {
            if (tempUser === null) {
                setUser(null);
            } else {
                const { uid, displayName, email, photoURL } = tempUser;
                setUser({ uid, displayName, email, photoURL });
            }
        });
    }, [auth]);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;

export function useUserData() {
    const data = useContext(UserContext);
    return data;
}
