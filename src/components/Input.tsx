interface Props {
  value: string;
  onChange: (value: string) => void;
}

function Input({ value, onChange }: Props): JSX.Element {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter FLAG for next level"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </div>
  );
}

export default Input;
