import { useQuery, useQueryClient } from 'react-query';

import { getCharData } from '../utils/queryFn';

const useCharDataQuery = (char: string) => {
    return useQuery(['char', char], () => getCharData(char));
};

export default useCharDataQuery;
