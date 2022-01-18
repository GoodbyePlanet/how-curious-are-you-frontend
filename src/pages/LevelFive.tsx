import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelFive(): JSX.Element {
  const [flagSix, setFlagSix] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagSix === process.env.LEVEL_SIX) {
      navigate("level-six");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="FIVE" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagSix} onChange={setFlagSix} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelFive;
