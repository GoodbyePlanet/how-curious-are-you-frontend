interface Props {
  value: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

function Input({ value, autoFocus, onChange }: Props): JSX.Element {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter FLAG for next level"
        autoFocus={autoFocus}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </div>
  );
}

export default Input;
