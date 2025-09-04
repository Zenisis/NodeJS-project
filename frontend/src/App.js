import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const res = await fetch("http://localhost:5001/api/message");
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Frontend</h1>
      <button onClick={callBackend}>Call Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
