import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    setDoc,
    Timestamp,
    updateDoc,
} from 'firebase/firestore/lite';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import db from '../../firebaseInit';
import { deleteCharData, updateUserHistory } from '../../utils/queryFn';

const useDeleteCharDataQuery = (
    char: string,
    data: Object,
    uid: string,
    type: string
) => {
    const queryClient = useQueryClient();

    async function getPromise() {
        const docRef = doc(db, 'Character', char);
        await deleteCharData(docRef, type, data);
        await updateUserHistory(char, data, uid, type);
        queryClient.invalidateQueries(['char', char]);
    }
    return useMutation(['char', char], () => getPromise());
};

export default useDeleteCharDataQuery;
