import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../firebaseInit';

interface UserProps {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
}
const UserContext = createContext<UserProps | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(null);
    useEffect(() => {
        auth.onAuthStateChanged(async (tempUser: any) => {
            if (tempUser === null) {
                setUser(null);
            } else {
                const { uid, displayName, email, photoURL } = tempUser;
                setUser({ uid, displayName, email, photoURL });
            }
            console.log(tempUser);
        });
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;

export function useUserData() {
    const data = useContext(UserContext);
    return data;
}
