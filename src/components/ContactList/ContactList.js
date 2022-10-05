import { Button, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id} style={{ marginTop: '10px' }}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
