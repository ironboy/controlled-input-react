import useFetch from './utils/useFetch';
import Modules from './Modules/moduleMaker';

export default function UserList() {

  const [users, loading] = useFetch('/api/users');

  if (loading) { return null; }

  if (!users.length) {
    return <>
      <h2>Alla användare</h2>
      <p>Inga användare i systemet.</p>
    </>;
  }

  return <section className="user-list">
    <h2>Alla användare</h2>
    {users.map(({ id, firstName, lastName, email }) => <article key={id}>
      <h3>{firstName} {lastName}</h3>
      <p>E-post: {Modules.UserHandler.createMailLink({ firstName, lastName, email })}</p>
    </article>)}

  </section>;

}