import "./App.css";
import { usePlayerMachine } from "./hooks/usePlayerMachine";
import { type ReactNode } from "react";

function App() {
  const [state, send] = usePlayerMachine();

  return (
    <div>
      <h1>Player Machine Active State: {state.value as ReactNode}</h1>
    </div>
  );
}

export default App;
