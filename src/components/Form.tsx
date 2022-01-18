import { FormEvent } from "react";

interface Props {
  onSubmit: (value: FormEvent) => void;
  children: JSX.Element[];
}

function Form({ onSubmit, children }: Props): JSX.Element {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
