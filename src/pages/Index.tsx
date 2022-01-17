import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import Input from "../components/Input";

function Index() {
  const [flagOne, setFlagOne] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("{HCAY_Flag: \"flagOne\"}")
  }, [])
  
  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();
    console.log(flagOne);

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
          onChange={setFlagOne}
        />
        <Button />
      </form>
    </div>
  );
}

export default Index;
