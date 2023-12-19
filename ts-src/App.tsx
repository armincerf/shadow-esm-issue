import { useState } from "react";
import { foo } from "../shadow-output/js/foo.js";

function App() {
  const [message, setMessage] = useState("Hello World");

  return (
    <>
      <button onClick={() => setMessage(foo())}>Message: {message}</button>
    </>
  );
}

export default App;
