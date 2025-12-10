import "./App.css";
import { PlayerModal } from "./components/PlayerModal/PlayerModal";
import { usePlayerMachine } from "./hooks/usePlayerMachine";
import { Button } from "antd";

function App() {
  const [state, send] = usePlayerMachine();

  return (
    <div>
      <Button onClick={() => send({ type: "PLAY" })}>Открыть плеер</Button>

      <PlayerModal state={state} send={send} />
    </div>
  );
}

export default App;
