import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CongratulationsHeader from "../components/CongratulationsHeader";
import Form from "../components/Form";
import Input from "../components/Input";

import "./LevelOne.css";

function LevelOne(): JSX.Element {
  const [flagTwo, setFlagTwo] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagTwo === process.env.FLAG_TWO) {
      navigate("level-two");
    }
  };

  return (
    <div>
      <CongratulationsHeader level="ONE" />

      <div className="two">
        <div>
          <div>
            <div>
              <p>HCAY_Flag: levelTwo</p>
            </div>
          </div>
        </div>
      </div>

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagTwo} onChange={setFlagTwo} />
        <Button />
      </Form>
    </div>
  );
}

export default LevelOne;
