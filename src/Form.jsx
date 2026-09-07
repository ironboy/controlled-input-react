import { useState } from 'react';

export default function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return <>
    <h3>{firstName} {lastName}</h3>
    <form>
      <label>
        <span>Förnamn:&nbsp;</span>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        <span>Efternamn:&nbsp;</span>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.currentTarget.value)}
          required
        />
      </label>
    </form>
  </>;
}