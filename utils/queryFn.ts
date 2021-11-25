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
import db from '../firebaseInit';
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
    } catch {
        throw new Error('Error with Updating User History');
    }
};

export const deleteCharData = async (
    docRef: DocumentReference<DocumentData>,
    type: string,
    data: Object
) => {
    try {
        await updateDoc(docRef, { [type]: arrayRemove(data) });
    } catch {
        throw new Error('Error with Removing old data');
    }
};
export const AddCharData = async (
    docRef: DocumentReference<DocumentData>,
    type: string,
    data: Object
) => {
    try {
        await updateDoc(docRef, { [type]: arrayUnion(data) });
    } catch {
        throw new Error('Error with add New data');
    }
};
export async function getCharData(char: string) {
    const docRef = doc(db, 'Character', char);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return getOrderedCharData(docSnap.data());
    } else {
        throw new Error('No Character');
    }
}
