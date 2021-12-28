import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, ThunkExtraArguments } from '../store';

export interface DialogContentProp {
    content: string;
}

interface DialogProp {
    dialog: DialogContentProp;
    isOpen: boolean;
    isConfirmed: boolean;
    isDeclined: boolean;
}

const initialState: DialogProp = {
    dialog: {
        content: '',
    },
    isOpen: false,
    isConfirmed: false,
    isDeclined: false,
};

const slice = createSlice({
    reducers: {
        openDialog(state, action: PayloadAction<DialogContentProp>) {
            state.isOpen = true;
            state.isConfirmed = false;
            state.isDeclined = false;
            state.dialog = action.payload;
        },
        closeDialog(state) {
            state.isOpen = false;
        },
        confirmDialog(state) {
            state.isConfirmed = true;
            state.isOpen = false;
        },
        declineDialog(state) {
            state.isDeclined = true;
            state.isOpen = false;
        },
    },
    name: 'dialog',
    initialState,
});

export const confirmationAsyncAction = {
    open: createAsyncThunk<
        boolean,
        DialogContentProp,
        { extra: ThunkExtraArguments }
    >(
        'dialogStatus',
        async (payload, { extra: { store }, dispatch }): Promise<boolean> => {
            dispatch(openDialog(payload));
            return await new Promise<boolean>((resolve) => {
                const unsubscribe = store.subscribe(() => {
                    const { dialogReducer } = store.getState() as RootState;
                    if (dialogReducer.isConfirmed) {
                        unsubscribe();
                        resolve(true);
                    }
                    if (dialogReducer.isDeclined) {
                        unsubscribe();
                        resolve(false);
                    }
                });
            });
        }
    ),
};

export const { openDialog, closeDialog, confirmDialog, declineDialog } =
    slice.actions;
export default slice.reducer;
