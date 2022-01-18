import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelEight() {
  const [flagNine, setFlagNine] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagNine === process.env.LEVEL_NINE) {
      navigate("level-nine");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached level EIGHT</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagNine} onChange={setFlagNine} />
        <Button />
      </form>
    </div>
  );
}

export default LevelEight;
