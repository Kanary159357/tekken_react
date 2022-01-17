import { useSelector } from 'react-redux';
import { signInWithGoogle } from '../../firebaseInit';
import { RootState } from '../store/store';
import { isEmpty } from '../utils/isEmpty';
import useDialog from './useDialog';

const useUserCheckDialog = () => {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const { openDialog } = useDialog();

    const openUserCheckDialog = async (fn: Function, description: string) => {
        if (!isEmpty(user)) {
            const hasConfirm = await openDialog({
                content: description,
            });
            if (hasConfirm) {
                await fn();
            }
        } else {
            const hasConfirm = await openDialog({
                content: '정보를 수정하기 위해서는 로그인해야합니다',
            });
            if (hasConfirm) {
                signInWithGoogle();
            }
        }
    };
    return { openUserCheckDialog };
};

export default useUserCheckDialog;
