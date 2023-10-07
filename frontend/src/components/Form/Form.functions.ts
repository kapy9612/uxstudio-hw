import { ContactType } from '@utils/types';

type PutDataObjectType = Omit<ContactType, 'id'> & {
    contact: ContactType;
};
export const createPostDataObject = ({
    name,
    phone,
    email,
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

    return sendObj;
};

export const createPutDataObject = ({
    name,
    phone,
    email,
    contact,
}: PutDataObjectType) => {
    let sendObj: Partial<ContactType> = {};
    if (name !== contact.name) {
        sendObj.name = name;
    }
    if (phone !== contact.phone) {
        sendObj.phone = phone;
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
