import {
    arrayUnion,
    doc,
    getDoc,
    setDoc,
    Timestamp,
    updateDoc,
} from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import db from '../firebaseInit';
import { getOrderedCharData } from '../utils/charDataSort';
import { AddCharData, updateUserHistory } from '../utils/queryFn';

const useAddCharDataQuery = (
    char: string,
    data: Object,
    uid: string | null,
    type: string
) => {
    const queryClient = useQueryClient();

    async function getPromise() {
        if (uid) {
            const docRef = doc(db, 'Character', char);
            await AddCharData(docRef, type, data);
            await updateUserHistory(char, data, uid, type);
            queryClient.invalidateQueries(['char', char]);
        }
    }
    return useMutation(['char', char], () => getPromise());
};

export default useAddCharDataQuery;
