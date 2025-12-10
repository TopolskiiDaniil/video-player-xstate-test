import { Modal } from "antd";
import ReactPlayer from "react-player";
import { type StateFrom, type EventFrom } from "xstate";
import { playerMachine } from "../../machines/playerMachine";
import { TogglePlayPauseButton } from "../UI/TogglePlayPauseButton";
import { ToggleZoomButton } from "../UI/ToggleZoomButton";
import "../PlayerModal/PlayerModal.css";

type PlayerState = StateFrom<typeof playerMachine>;
type PlayerEvent = EventFrom<typeof playerMachine>;

interface PlayerModalProps {
  state: PlayerState;
  send: (event: PlayerEvent) => void;
}

export const PlayerModal = ({ state, send }: PlayerModalProps) => {
  const width = state.matches("mini") ? 500 : 1000;

  const handleZoomButtonClick = () => {
    if (state.matches("mini")) {
      send({ type: "EXPAND" });
    } else {
      send({ type: "MINIMIZE" });
    }
  };

  const handlePlayPauseButtonClick = () => {
    if (state.context.playing) {
      send({ type: "PAUSE" });
    } else {
      send({ type: "PLAY" });
    }
  };

  return (
    <Modal
      open={state.matches("opened") || state.matches("mini")}
      onCancel={() => send({ type: "CLOSE" })}
      title={
        <header
          style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0" }}
        >
          <h2
            style={{
              margin: 0,
              wordWrap: "break-word",
              color: "rgba(0, 0, 0, .85)",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22px",
            }}
          >
            PLAYER
          </h2>
        </header>
      }
      footer={
        <footer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <ToggleZoomButton
            isMini={state.matches("opened")}
            onClick={handleZoomButtonClick}
          />
          <TogglePlayPauseButton
            isPlay={state.context.playing}
            onClick={handlePlayPauseButtonClick}
          />
        </footer>
      }
      width={width}
      style={{
        transition: "width 0.3s ease",
      }}
      modalRender={(node) => node}
    >
      <ReactPlayer
        src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
        playing={state.context.playing}
        width="100%"
        height="100%"
      />
    </Modal>
  );
};
