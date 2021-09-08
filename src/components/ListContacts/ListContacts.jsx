import React from 'react';
// import PropTypes from 'prop-types';
// import s from './ListContacts.module.css';

// const ListContactsItem = ({ id, name, number, onDelete }) => {
//   return (
//     <li className={s.item}>
//        <p className={s.text}>
//           {name}: <span className={s.name}>{number}</span>
//        </p>
//        <button
//           className={s.button}
//           type="button"
//           onClick={() => onDelete(id)}
//           title="Удалить"
//        >
//          Delete
//        </button>
//     </li>
//   );
// };

// const ListContacts = ({ contacts, onDelete}) => {
//   if (contacts.length === 0) return null;
//   return (
//     <ul className={s.list}>
//       {contacts.map(contact => (
//         <ListContactsItem
//            {...contact}
//            onDelete={onDelete}
//            key={contact.id}
//         />
//       ))}
//     </ul>
//   )
// }

export default function ListContacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {' '}
          {contact.name} : {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ListContacts.propTypes = {
//   contacts: PropTypes.arrayOf (
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name:PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
