import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface TogglePlayPauseButtonProps {
  isPlay: boolean;
  onClick: () => void;
}

export const TogglePlayPauseButton = ({
  isPlay,
  onClick,
}: TogglePlayPauseButtonProps) => {
  return (
    <>
      <Button shape="circle" onClick={onClick}>
        {!isPlay ? (
          <CaretRightOutlined style={{ fontSize: "16px" }} />
        ) : (
          <PauseOutlined style={{ fontSize: "16px" }} />
        )}
      </Button>
    </>
  );
};
