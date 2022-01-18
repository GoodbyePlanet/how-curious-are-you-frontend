import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelEight(): JSX.Element {
  const [flagNine, setFlagNine] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagNine === process.env.LEVEL_NINE) {
      navigate("level-nine");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached level EIGHT</p>

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagNine} onChange={setFlagNine} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelEight;
