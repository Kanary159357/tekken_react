import {
    arrayRemove,
    arrayUnion,
    doc,
    DocumentData,
    DocumentReference,
    getDoc,
    setDoc,
    Timestamp,
    updateDoc,
} from 'firebase/firestore/lite';
import db from '../../firebaseInit';
import { CharProps } from '../types/CharProps';
import { getOrderedCharData } from './charDataSort';

export const updateUserHistory = async (
    char: string,
    data: Object,
    uid: string,
    type: string
) => {
    const history = {
        char: char,
        data: data,
        time: Timestamp.fromDate(new Date()),
    };
    const docRef = doc(db, 'User', uid);
    const document = (await getDoc(docRef)).data();
    try {
        if (document!.exists && document) {
            await updateDoc(docRef, {
                [type]: arrayUnion(history),
            });
        } else {
            await setDoc(doc(db, 'User', uid), { [type]: [history] });
        }
        return true;
    } catch {
        return false;
    }
};

export const deleteCharData = async (
    docRef: DocumentReference<DocumentData>,
    type: string,
    data: Object
) => {
    try {
        await updateDoc(docRef, { [type]: arrayRemove(data) });
        return true;
    } catch {
        return false;
    }
};
export const addCharData = async (
    docRef: DocumentReference<DocumentData>,
    type: string,
    data: Object
) => {
    try {
        await updateDoc(docRef, { [type]: arrayUnion(data) });
        return true;
    } catch {
        return false;
    }
};
export async function getCharData(char: string) {
    const docRef = doc(db, 'Character', char);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return getOrderedCharData(docSnap.data() as CharProps);
    } else {
        return false;
    }
}
