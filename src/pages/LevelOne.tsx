import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LevelOne() {
  const [flagTwo, setFlagTwo] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagTwo === process.env.FLAG_ONE) {
      navigate("level-one");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached level ONE</p>

      <form onSubmit={handleFlagSubmit}>
        <Input
          autoFocus
          value={flagTwo}
          onChange={setFlagTwo}
        />
        <Button />
      </form>
    </div>
  );
}

export default LevelOne;
