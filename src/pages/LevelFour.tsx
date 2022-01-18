import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelFour(): JSX.Element {
  const [flagFive, setFlagFive] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagFive === process.env.LEVEL_FIVE) {
      navigate("level-five");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="FOUR" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagFive} onChange={setFlagFive} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelFour;
