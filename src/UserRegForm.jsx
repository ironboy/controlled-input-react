import Modules from './Modules/moduleMaker';
import Form from './Form';

export default function UserRegForm() {

  return <>
    <h2>Registrera användare</h2>
    <Form
      submitToUrl="/api/users"
      routeAfterSubmit="/"
      descriptor={Modules.UserHandlerDescriptor.userRegForm}
      sendButtonLabel="Registrera"
    />
  </>;
};