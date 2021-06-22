import React from 'react';
import { User } from '../../zustand/types';
import { Link } from 'react-router-dom';

const UserItem = ({
  email,
  name,
  phone,
  id
}: User) => {

  return (
    <li style={{margin: 10, display: 'flex', flexDirection: 'column'}}>
      <label>{name}</label>
      <label>{phone}</label>
      <label>{email}</label>
      <Link to={`/user-detail/${id}`}>Ver</Link>
    </li>
  )

}

export default UserItem;