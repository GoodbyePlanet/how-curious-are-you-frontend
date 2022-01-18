import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function End() {
  const [flagTen, setFlagTen] = useState("");
  const navigate = useNavigate();

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagTen === process.env.LEVEL_TEN) {
      navigate("hall-of-fame");
    }
  };

  return (
    <div>
      <p>Congrats, you've reached the LAST level</p>

      <form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagTen} onChange={setFlagTen} />
        <Button />
      </form>
    </div>
  );
}

export default End;
