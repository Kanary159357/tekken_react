import { useDispatch } from 'react-redux';
import {
    confirmationAsyncThunk,
    DialogContentProp,
} from '../store/slice/dialogReducer';

const useDialog = () => {
    const dispatch = useDispatch();
    const openDialog = async (state: DialogContentProp) => {
        const { payload } = await dispatch(confirmationAsyncThunk.open(state));
        return payload;
    };

    return { openDialog };
};

export default useDialog;
