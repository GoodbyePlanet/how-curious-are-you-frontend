import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

function LevelNine(): JSX.Element {
  const [flagTen, setFlagTen] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagTen === process.env.LEVEL_TEN) {
      navigate("end");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached the LAST level</p>

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagTen} onChange={setFlagTen} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelNine;
