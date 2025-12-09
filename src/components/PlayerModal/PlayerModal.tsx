import { Modal, Button } from "antd";
import ReactPlayer from "react-player";
import { type StateFrom, type EventFrom } from "xstate";
import { playerMachine } from "../../machines/playerMachine";

type PlayerState = StateFrom<typeof playerMachine>;
type PlayerEvent = EventFrom<typeof playerMachine>;

interface PlayerModalProps {
  state: PlayerState;
  send: (event: PlayerEvent) => void;
}

export const PlayerModal = ({ state, send }: PlayerModalProps) => {
  return (
    <Modal
      open={state.matches("opened") || state.matches("mini")}
      onCancel={() => send({ type: "CLOSE" })}
      footer={
        <>
          <Button
            onClick={() =>
              state.matches("opened")
                ? send({ type: "MINIMIZE" })
                : send({ type: "EXPAND" })
            }
          >
            Mini/Full
          </Button>
          <Button
            onClick={() =>
              send({ type: state.context.playing ? "PAUSE" : "PLAY" })
            }
          >
            {state.context.playing ? "Пауза" : "Воспроизведение"}
          </Button>
        </>
      }
      width={state.matches("mini") ? "500px" : "1000px"}
    >
      <ReactPlayer
        src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
        playing={state.context.playing}
        width="100%"
        height="450px"
      />
    </Modal>
  );
};
