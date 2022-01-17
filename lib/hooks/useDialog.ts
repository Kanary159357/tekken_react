import {
    confirmationAsyncAction,
    DialogContentProp,
} from '../store/slice/dialogReducer';
import { useAppDispatch } from '../store/store';

const useDialog = () => {
    const dispatch = useAppDispatch();
    const openDialog = async (state: DialogContentProp) => {
        const { payload } = await dispatch(confirmationAsyncAction.open(state));
        return payload;
    };

    return { openDialog };
};

export default useDialog;
