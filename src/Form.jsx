import useFormDescriptor from "./utils/useFormDescriptor";

export default function Form({ descriptor }) {

  const [fields, formData, resetForm] = useFormDescriptor(descriptor);

  async function sendForm(event) {
    // prevent page reload (standard behavior in
    // browsers for historical reasons - not right for an SPA)
    event.preventDefault();
    // send to backend 
    // (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    await fetch('/api/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    // TODO: goto another location with react router
    // OR if several posts in a row is the intended behavior
    // (like an add product page for admins etc)
    // clear the form - reset to initial values
    // example: reset the form with a message at top
    resetForm(<p>Tack för registreringen, registrera en till?</p>);
  }

  return <>
    <form onSubmit={sendForm}>
      {fields}
      <button type="submit">Skicka</button>
    </form>
  </>;
}