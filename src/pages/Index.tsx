import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

function Index(): JSX.Element {
  const [flagOne, setFlagOne] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log('{HCAY_Flag: "flagOne"}');
  }, []);

  const handleFlagSubmit = (event: any): void => {
    event.preventDefault();

    if (flagOne === process.env.FLAG_ONE) {
      navigate("level-one");
    }
  };

  return (
    <div>
      <p>Hi there, I'm Nemanja and I have a question for you</p>
      <h3>How curious are you?</h3>

      <Form onSubmit={handleFlagSubmit}>
        <Input autoFocus value={flagOne} onChange={setFlagOne} />
        <Button />
      </Form>
    </div>
  );
}

export default Index;
