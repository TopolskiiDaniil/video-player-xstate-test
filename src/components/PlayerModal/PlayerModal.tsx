import { Modal } from "antd";
import ReactPlayer from "react-player";
import { type StateFrom, type EventFrom } from "xstate";
import { playerMachine } from "../../machines/playerMachine";
import "./PlayerModal.css";
import { PlayerModalHeader } from "../PlayerModalHeader/PlayerModalHeader";
import { PlayerModalFooter } from "../PlayerModalFooter/PlayerModalFooter";
import { useEffect, useRef } from "react";

type PlayerState = StateFrom<typeof playerMachine>;
type PlayerEvent = EventFrom<typeof playerMachine>;

interface PlayerModalProps {
  state: PlayerState;
  send: (event: PlayerEvent) => void;
}

export const PlayerModal = ({ state, send }: PlayerModalProps) => {
  const width = state.matches("mini") ? 500 : 1000;

  const isModalOpen = state.matches("opened") || state.matches("mini");
  const isMini = state.matches("mini");

  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isModalOpen) {
      playerRef.current?.pause();
    }
  }, [isModalOpen, send]);

  const handleZoomButtonClick = () =>
    send({ type: state.matches("mini") ? "EXPAND" : "MINIMIZE" });

  const handlePlayPauseButtonClick = () =>
    send({ type: state.context.playing ? "PAUSE" : "PLAY" });

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => send({ type: "CLOSE" })}
      title={<PlayerModalHeader />}
      footer={
        <PlayerModalFooter
          isMini={isMini}
          isPlay={state.context.playing}
          onZoomButtonClick={handleZoomButtonClick}
          onPlayPauseButtonClick={handlePlayPauseButtonClick}
        />
      }
      width={width}
      style={{
        transition: "width 0.3s ease",
      }}
    >
      <ReactPlayer
        ref={playerRef}
        src="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
        playing={state.context.playing}
        width="100%"
        height="100%"
      />
    </Modal>
  );
};
