import { doc } from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import db from '../../firebaseInit';
import {
    AddCharData,
    deleteCharData,
    updateUserHistory,
} from '../../utils/queryFn';

const useEditCharDataQuery = (
    char: string,
    old: Object,
    newData: Object,
    uid: string,
    type: string
) => {
    const queryClient = useQueryClient();

    async function getPromise() {
        const docRef = doc(db, 'Character', char);
        await deleteCharData(docRef, type, old);
        await AddCharData(docRef, type, newData);
        await updateUserHistory(char, { old, newData }, uid, type);
        queryClient.invalidateQueries(['char', char]);
    }
    return useMutation(['char', char], () => getPromise());
};

export default useEditCharDataQuery;
