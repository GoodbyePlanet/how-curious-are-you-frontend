import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function End(): JSX.Element {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleFinisherSubmit = (event: any): void => {
    event.preventDefault();

    console.log("Adding new finiser ", name, link);
  };

  return (
    <div>
      <p>Congrats, you've finished all levels</p>

      <p>
        If you would like to be in the <a href="/hall-of-fame">Hall Of Fame</a>{" "}
        page fill the name and your prefered social network link
      </p>

      <form onSubmit={handleFinisherSubmit}>
        <Input autoFocus value={name} onChange={setName} />
        <Input autoFocus value={link} onChange={setLink} />
        <Button />
      </form>
    </div>
  );
}

export default End;
