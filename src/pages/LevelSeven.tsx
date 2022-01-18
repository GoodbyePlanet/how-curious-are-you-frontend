import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelSeven(): JSX.Element {
  const [flagEight, setFlagEight] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagEight === process.env.LEVEL_EIGHT) {
      navigate("level-eight");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="SEVEN" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagEight} onChange={setFlagEight} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelSeven;
