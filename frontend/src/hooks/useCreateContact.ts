import { useMutation, useQueryClient } from 'react-query';

import { postRequest } from '@utils/request';
import { ContactType } from '@utils/types';

export const useCreateContact = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newPost: Omit<ContactType, 'id'>) =>
            postRequest<Omit<ContactType, 'id'>>('/contact', newPost),
        {
            onSuccess: () => {
                void queryClient.invalidateQueries({ queryKey: ['contacts'] });
            },
        },
    );
};
