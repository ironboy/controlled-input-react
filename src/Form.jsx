import useFormDescriptor from "./utils/useFormDescriptor";
import { useNavigate } from 'react-router';

export default function Form({ descriptor, submitToUrl, method = 'POST', routeAfterSubmit, sendButtonLabel = "Skicka" }) {

  const [fields, formData] = useFormDescriptor(descriptor);
  const navigate = useNavigate();

  async function sendForm(event) {
    // prevent page reload (standard behavior in
    // browsers for historical reasons - not right for an SPA)
    event.preventDefault();
    // send to backend 
    // (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    await fetch(submitToUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    // navigate to correct route
    navigate(routeAfterSubmit);
  }

  return <>
    <form onSubmit={sendForm}>
      {fields}
      <button type="submit">{sendButtonLabel}</button>
    </form>
  </>;
}