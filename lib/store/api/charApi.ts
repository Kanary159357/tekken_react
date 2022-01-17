import { createApi } from '@reduxjs/toolkit/query/react';
import { CharProps } from '../../types/CharProps';
import {
    addCharDataQuery,
    deleteCharDataQuery,
    editCharDataQuery,
    getCharDataQuery,
} from '../../query/charQuery';
import { HYDRATE } from 'next-redux-wrapper';
export const charApi = createApi({
    reducerPath: 'charApi',
    baseQuery: getCharDataQuery,
    tagTypes: ['Char'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getCharacterByName: builder.query<CharProps, string>({
            query: (name) => name,
            providesTags: (result, error, name) => [{ type: 'Char', id: name }],
        }),
        addChar: builder.mutation<
            { success: boolean },
            {
                char: string;
                data: Object;
                uid: string;
                type: string;
            }
        >({
            queryFn: ({ char, data, uid, type }) =>
                addCharDataQuery({ char, data, uid, type }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Char', id: arg.char },
            ],
        }),
        deleteCharData: builder.mutation<
            { success: boolean },
            {
                char: string;
                data: Object;
                uid: string;
                type: string;
            }
        >({
            queryFn: ({ char, data, uid, type }) =>
                deleteCharDataQuery({ char, data, uid, type }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Char', id: arg.char },
            ],
        }),
        editCharData: builder.mutation<
            { success: boolean },
            {
                char: string;
                old: Object;
                newData: Object;
                uid: string;
                type: string;
            }
        >({
            queryFn: ({ char, old, newData, uid, type }) =>
                editCharDataQuery({ char, old, newData, uid, type }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Char', id: arg.char },
            ],
        }),
    }),
});
export const getCharacterByName = charApi.endpoints.getCharacterByName;

export const {
    useAddCharMutation,
    useGetCharacterByNameQuery,
    useEditCharDataMutation,
    useDeleteCharDataMutation,
    util: { getRunningOperationPromises },
} = charApi;
