import { useMutation, useQueryClient } from 'react-query';

import { deleteRequest } from '@utils/request';
import { ContactType } from '@utils/types';

export const useDeleteContact = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (post: Pick<ContactType, 'id'>) =>
            deleteRequest<Pick<ContactType, 'id'>>(`/contact/${post.id}`),
        {
            onSuccess: () => {
                void queryClient.invalidateQueries({ queryKey: ['contacts'] });
            },
        },
    );
};
