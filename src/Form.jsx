import { useState } from 'react';

export default function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return <>
    <h3>{firstName} {lastName}</h3>
    <form>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        required
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={e => setLastName(e.currentTarget.value)}
        required
      />
    </form>
  </>;
}