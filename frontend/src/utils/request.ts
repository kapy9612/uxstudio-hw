import axios, { AxiosResponse, Method } from 'axios';

import { ContactType } from '@utils/types';

const request = async <T>(
    method: Method,
    path: string,
    body?: Omit<ContactType, 'id'> | Partial<ContactType>,
) => {
    const response: AxiosResponse<T> = await axios({
        method,
        baseURL: process.env['NEXT_PUBLIC_BACKEND_URL'],
        url: path,
        data: body,
    });

    return response.data;
};

export const getRequest = async <T>(path: string) => {
    return request<T>('get', path);
};

export const postRequest = async <T>(
    path: string,
    body: Omit<ContactType, 'id'>,
) => {
    return request<T>('post', path, body);
};

export const putRequest = async <T>(
    path: string,
    body: Partial<ContactType>,
) => {
    return request<T>('put', path, body);
};

export const deleteRequest = async <T>(path: string) => {
    return request<T>('delete', path);
};
