import React from 'react';

import { ContactListSection } from '@components/ContactListSection/ContactListSection';
import { Form } from '@components/Form/Form';
import { Header } from '@components/Header/Header';
import { Overlay } from '@components/Overlay/Overlay';

import { useContacts } from '@hooks/useContacts';
import { useModal } from '@hooks/useModal';

//TODO: loading screen
const ContactPage = () => {
    const contacts = useContacts();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <Header title="Contacts" openModal={openModal} />
            <ContactListSection data={contacts.data ? contacts.data : []} />
            {isOpen && (
                <Overlay>
                    <Form title="Add contact" closeModal={closeModal} />
                </Overlay>
            )}
        </>
    );
};

export default ContactPage;
