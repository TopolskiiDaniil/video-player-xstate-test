import { ToggleZoomButton } from "../UI/ToggleZoomButton";
import { TogglePlayPauseButton } from "../UI/TogglePlayPauseButton";
import "./PlayerModalFooter.css";

interface PlayerModalFooterProps {
  isMini: boolean;
  isPlay: boolean;
  onZoomButtonClick: () => void;
  onPlayPauseButtonClick: () => void;
}

export const PlayerModalFooter = ({
  isMini,
  isPlay,
  onZoomButtonClick,
  onPlayPauseButtonClick,
}: PlayerModalFooterProps) => {
  return (
    <footer className="player-modal-footer">
      <ToggleZoomButton isMini={isMini} onClick={onZoomButtonClick} />
      <TogglePlayPauseButton isPlay={isPlay} onClick={onPlayPauseButtonClick} />
    </footer>
  );
};
