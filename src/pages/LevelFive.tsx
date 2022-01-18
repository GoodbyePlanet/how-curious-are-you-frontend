import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelFive() {
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
      <p>Congrats, you've reached level FIVE</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagSix} onChange={setFlagSix} />
        <Button />
      </form>
    </div>
  );
}

export default LevelFive;
