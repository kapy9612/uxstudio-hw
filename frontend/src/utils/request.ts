import axios, { AxiosResponse, Method } from 'axios';

const request = async <T>(method: Method, path: string, body?: T) => {
    const response: AxiosResponse = await axios({
        method,
        baseURL: process.env['NEXT_PUBLIC_BACKEND_URL'],
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        url: path,
        data: body,
    });

    return response.data;
};

export const getRequest = async <T>(path: string) => {
    return request<T>('get', path);
};

export const postRequest = async <T>(path: string, body: T) => {
    return request<T>('post', path, body);
};

export const putRequest = async <T>(path: string, body: T) => {
    return request<T>('put', path, body);
};

export const deleteRequest = async <T>(path: string) => {
    return request<T>('delete', path);
};
