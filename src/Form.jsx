import useFormDescriptor from "./utils/useFormDescriptor";

export default function Form({ descriptor }) {

  const fields = useFormDescriptor(descriptor);

  return <>
    <form>
      {fields}
    </form>
  </>;
}