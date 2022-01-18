import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelSix(): JSX.Element {
  const [flagSeven, setFlagSeven] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagSeven === process.env.LEVEL_SEVEN) {
      navigate("level-seven");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="SIX" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagSeven} onChange={setFlagSeven} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelSix;
