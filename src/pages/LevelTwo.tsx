import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelTwo(): JSX.Element {
  const [flagThree, setFlagThree] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagThree === process.env.FLAG_THREE) {
      navigate("level-three");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="TWO" />

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagThree} onChange={setFlagThree} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelTwo;
