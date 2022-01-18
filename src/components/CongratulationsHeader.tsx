interface Props {
  level: string;
}

function CongratulationsHeader({ level }: Props): JSX.Element {
  return <p>Congrats, you've reached level <strong>{level}</strong></p>;
}

export default CongratulationsHeader;
