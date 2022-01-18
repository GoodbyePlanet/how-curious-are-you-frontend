import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelSix() {
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
      <p>Congrats, you've reached level FIVE</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagSeven} onChange={setFlagSeven} />
        <Button />
      </form>
    </div>
  );
}

export default LevelSix;
