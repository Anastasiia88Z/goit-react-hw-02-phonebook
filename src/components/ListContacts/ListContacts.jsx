import React from 'react';
import s from './ListContacts.module.css';
import PropTypes from 'prop-types';

export default function ListContacts({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          {' '}
          {contact.name} : {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
