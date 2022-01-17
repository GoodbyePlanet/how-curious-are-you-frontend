import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import Input from "../components/Input";

function Index() {
  const [flagOne, setFlagOne] = useState("");
  const navigate = useNavigate();
  
  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagOne === process.env.FLAG_ONE) {
      navigate("level-one");
    }
  }

  return (
    <div>
      <p>Hi there, I'm Nemanja and I have a question for you</p>
      <h3>How curious are you?</h3>

      <form onSubmit={handleFlagSubmit}>
        <Input
          autoFocus
          value={flagOne}
          onChange={(value) => setFlagOne(value)}
        />
        <Button />
      </form>
    </div>
  );
}

export default Index;
