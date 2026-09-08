import { useState } from 'react';

export default function useFormDescriptor(descriptor) {

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

  // Use ONE object with one property per input in the form
  // as our single state variable, rather than a new state
  // variable fro each input
  const [formData, setFormData] = useState(null);

  // Transform the descriptor into jsx by looping through it's entrie
  const fields = [];
  const initialFormState = {};
  for (let [formFieldName, fieldDescription] of Object.entries(descriptor)) {
    const { label, type, initialValue, required } = fieldDescription;
    const inputAttributes = {
      name: formFieldName,
      type,
      required,
      onChange: changeData,
      value: formData ? formData[formFieldName] : initialValue
    };
    fields.push(<label key={formFieldName}>
      <span>{label}:&nbsp;</span>
      <input {...inputAttributes} />
    </label>);
    initialFormState[formFieldName] = initialValue;
  }

  // If formData is null set it to initialFormState
  formData === null && setFormData(initialFormState);

  return fields;
}