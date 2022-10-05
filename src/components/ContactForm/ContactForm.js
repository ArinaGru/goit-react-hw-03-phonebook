import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { MyForm, Button, MyInput } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const telInputId = nanoid();
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
      <MyForm autoComplete="off">
        <label htmlFor={nameInputId}>Name</label>
        <MyInput
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={telInputId}>Number</label>
        <MyInput
          type="tel"
          name="number"
          id={telInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </MyForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
