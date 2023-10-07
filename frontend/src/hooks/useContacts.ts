import { useQuery } from 'react-query';

import { getRequest } from '@utils/request';
import { ContactType } from '@utils/types';

export const useContacts = () => {
    return useQuery(['contacts'], () => getRequest<ContactType[]>('/contact'));
};
