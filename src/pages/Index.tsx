import React from "react";
import { useState } from "react";
import Input from "../components/Input";

function Index() {
  const [flagOne, setFlagOne] = useState("");

  return (
    <div>
      <p>Hi there, I'm Nemanja and I have a question for you</p>
      <h3>How curious are you?</h3>

      <Input
        autoFocus
        value={flagOne}
        onChange={(value) => setFlagOne(value)}
      />
    </div>
  );
}

export default Index;
