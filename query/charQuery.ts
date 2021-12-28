import { doc } from 'firebase/firestore/lite';
import db from '../firebaseInit';
import {
    addCharData,
    deleteCharData,
    getCharData,
    updateUserHistory,
} from '../utils/queryFn';

export const deleteCharDataQuery = async ({
    char,
    data,
    uid,
    type,
}: {
    char: string;
    data: any;
    uid: string;
    type: string;
}) => {
    const docRef = doc(db, 'Character', char);
    try {
        const [res1, res2] = await Promise.all([
            deleteCharData(docRef, type, data),
            updateUserHistory(char, data, uid, type),
        ]);
        return { data: { success: res1 && res2 } };
    } catch (error) {
        return { error };
    }
};
export const addCharDataQuery = async ({
    char,
    data,
    uid,
    type,
}: {
    char: string;
    data: Object;
    uid: string | null;
    type: string;
}) => {
    console.log('hi');
    const docRef = doc(db, 'Character', char);
    try {
        const [res1, res2] = await Promise.all([
            addCharData(docRef, type, data),
            updateUserHistory(char, data, uid!, type),
        ]);
        return { data: { success: res1 && res2 } };
    } catch (error) {
        return { error };
    }
};
export const editCharDataQuery = async ({
    char,
    old,
    newData,
    uid,
    type,
}: {
    char: string;
    old: Object;
    newData: Object;
    uid: string;
    type: string;
}) => {
    const docRef = doc(db, 'Character', char);
    try {
        await deleteCharData(docRef, type, old);
        await addCharData(docRef, type, newData);
        const result = await updateUserHistory(
            char,
            { old, newData },
            uid,
            type
        );
        return { data: { success: result } };
    } catch (error) {
        return { error };
    }
};
export const getCharDataQuery = async (char: string) => {
    let data = await getCharData(char);
    return data == false ? { data: null } : { data };
};
