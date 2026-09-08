import Form from './Form';

export default function UserRegForm() {
  const formDescriptor = {
    firstName: {
      label: 'Förnamn',
      type: 'text',
      initialValue: '',
      required: true
    },
    lastName: {
      label: 'Efternamn',
      type: 'text',
      initialValue: '',
      required: true
    },
    email: {
      label: 'E-post',
      type: 'email',
      initialValue: '',
      required: true
    }
  };

  return <>
    <h2>Registrera användare</h2>
    <Form
      submitToUrl="/api/users"
      routeAfterSubmit="/"
      descriptor={formDescriptor}
      sendButtonLabel="Registrera"
    />
  </>;
};