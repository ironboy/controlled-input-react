import Form from './Form';

export default function App() {

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

  return <Form descriptor={formDescriptor} />;
}