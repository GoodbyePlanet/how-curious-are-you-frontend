import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelThree() {
  const [flagFour, setFlagFour] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagFour === "worldWideWeb") {
      navigate("level-four");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached level THREE</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagFour} onChange={setFlagFour} />
        <Button />
      </form>
    </div>
  );
}

export default LevelThree;
