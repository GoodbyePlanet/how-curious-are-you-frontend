import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelSeven() {
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
      <p>Congrats, you've reached level FIVE</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagEight} onChange={setFlagEight} />
        <Button />
      </form>
    </div>
  );
}

export default LevelSeven;
