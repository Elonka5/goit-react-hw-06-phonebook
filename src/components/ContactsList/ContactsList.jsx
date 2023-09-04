import {
  ContactListStyled,
  Buttons,
  ContactStyled,
} from './ContactsListstyled';

export const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactStyled key={id}>
          {name}: {number}
          <Buttons type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </Buttons>
        </ContactStyled>
      ))}
    </ContactListStyled>
  );
};
