import { Button } from "antd";
import { PlayerModal } from "../PlayerModal/PlayerModal";
import { usePlayerMachine } from "../../hooks/usePlayerMachine";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./thumbnailCard.css";

export const ThumbnailCard = ({ videoSrc }: { videoSrc: string }) => {
  const [state, send] = usePlayerMachine();

  return (
    <div className="thumbnail-card">
      <Button
        className="thumbnail-card-button"
        onClick={() => send({ type: "PLAY" })}
      >
        <PlayCircleOutlined style={{ fontSize: "50px" }} />
      </Button>

      <PlayerModal state={state} send={send} videoSrc={videoSrc} />
    </div>
  );
};
