import { useMutation, useQueryClient } from 'react-query';

import { putRequest } from '@utils/request';
import { ContactType } from '@utils/types';

type UpdateContactType = {
    updated: Omit<Partial<ContactType>, 'id'>;
    id: number;
};
export const useUpdateContact = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ updated, id }: UpdateContactType) =>
            putRequest<Omit<Partial<ContactType>, 'id'>>(
                `/contact/${id}`,
                updated,
            ),
        {
            onSuccess: () => {
                void queryClient.invalidateQueries({ queryKey: ['contacts'] });
            },
        },
    );
};
