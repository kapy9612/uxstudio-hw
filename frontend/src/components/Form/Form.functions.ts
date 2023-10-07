import { ContactType } from '@utils/types';

type PutDataObjectType = Omit<ContactType, 'id'> & {
    contact: ContactType;
};
export const createPostDataObject = ({
    name,
    phone,
    email,
    avatar,
}: Omit<ContactType, 'id'>) => {
    let sendObj: Partial<ContactType> = {};
    if (name) {
        sendObj.name = name;
    }
    if (phone) {
        sendObj.phone = phone;
    }
    if (email) {
        sendObj.email = email;
    }

    if (avatar) {
        sendObj.avatar = avatar;
    }

    return sendObj;
};

export const createPutDataObject = ({
    name,
    phone,
    email,
    avatar,
    contact,
}: PutDataObjectType) => {
    let sendObj: Partial<ContactType> = {};
    if (name !== contact.name) {
        sendObj.name = name;
    }
    if (phone !== contact.phone) {
        sendObj.phone = phone;
    }
    if (avatar !== contact.avatar) {
        sendObj.avatar = avatar;
    }
    if (email !== contact.email) {
        if (email === '') {
            sendObj.email = null as any;
        } else {
            sendObj.email = email;
        }
    }

    return sendObj;
};
