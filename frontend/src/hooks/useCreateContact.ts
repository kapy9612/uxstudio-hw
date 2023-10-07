import { useMutation, useQueryClient } from 'react-query';

import { postRequest } from '@utils/request';
import { ContactType } from '@utils/types';

export const useCreateContact = (body: Omit<ContactType, 'id'>) => {
    const queryClient = useQueryClient();
    return useMutation(
        () => postRequest<Omit<ContactType, 'id'>>('/contact', body),
        {
            onSuccess: () => {
                void queryClient.invalidateQueries({ queryKey: ['contact'] });
            },
        },
    );
};
