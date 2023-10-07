import React, { useState } from 'react';

import { ContactListSection } from '@components/ContactListSection/ContactListSection';
import { Form } from '@components/Form/Form';
import { Header } from '@components/Header/Header';
import { Overlay } from '@components/Overlay/Overlay';

import { useContacts } from '@hooks/useContacts';

//TODO: loading screen
const ContactPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contacts = useContacts();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
