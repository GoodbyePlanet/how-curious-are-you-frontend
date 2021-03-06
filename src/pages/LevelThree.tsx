import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelThree(): JSX.Element {
  const [flagFour, setFlagFour] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagFour === process.env.LEVEL_FOUR) {
      navigate("level-four");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="THREE" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagFour} onChange={setFlagFour} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelThree;
