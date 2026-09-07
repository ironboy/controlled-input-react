import useFormDescriptor from "./utils/useFormDescriptor";

export default function Form() {

  const descriptor = {
    firstName: {
      label: 'Förnamn',
      type: 'text',
      initialValue: 'Jane',
      required: true
    },
    lastName: {
      label: 'Efternamn',
      type: 'text',
      initialValue: 'Doe',
      required: true
    }
  };

  const fields = useFormDescriptor(descriptor);

  return <>
    <form>
      {fields}
    </form>
  </>;
}