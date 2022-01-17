import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function Index() {
  const [flagOne, setFlagOne] = useState("");

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    console.log("FLAG-ONE", flagOne);
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
