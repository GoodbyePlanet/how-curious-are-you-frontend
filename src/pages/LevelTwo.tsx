import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelTwo() {
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
      <p>Congrats, you've reached level TWO</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagThree} onChange={setFlagThree} />
        <Button />
      </form>
    </div>
  );
}

export default LevelTwo;
