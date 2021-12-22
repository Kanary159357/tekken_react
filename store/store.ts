import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slice/userReducer';
import dialogReducer from './slice/dialogReducer';
import { useDispatch } from 'react-redux';
export interface ThunkExtraArguments {
    store: Store;
}

const makeStore = () => {
    const thunkExtraArguments = {} as ThunkExtraArguments;
    const store = configureStore({
        reducer: {
            userReducer,
            dialogReducer,
        },
        middleware: getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtraArguments,
            },
            serializableCheck: false,
        }),
    });
    thunkExtraArguments.store = store;
    return store;
};
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const wrapper = createWrapper(makeStore, { debug: false });
