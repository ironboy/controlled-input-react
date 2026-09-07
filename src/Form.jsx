import { useState } from 'react';

export default function Form() {

  // Use ONE object with one property per input in the form
  // as our single state variable, rather than a new state
  // variable fro each input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  // This function works as a onChange handler
  // for all input elements in the form
  function changeData(event) {
    // Destructure name and value from event.currentTarget
    // (currentTarget is the HTML INput element that has
    // the onChange handler)
    const { name, value } = event.currentTarget;
    // Update form data
    // create a new object as a copy of the old (using spread)
    // and then chenge the correct property
    setFormData({ ...formData, [name]: value });
  }

  // Destructure all properties from formData
  // so that we don't have to write formData.firstName etc
  // in the value fields
  const { firstName, lastName } = formData;

  return <>
    <h3>{firstName} {lastName}</h3>
    <form>
      <label>
        <span>Förnamn:&nbsp;</span>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={changeData}
          required
        />
      </label>
      <label>
        <span>Efternamn:&nbsp;</span>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={changeData}
          required
        />
      </label>
    </form>
  </>;
}