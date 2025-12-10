import { ExpandAltOutlined, ShrinkOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface ToggleZoomButtonProps {
  isMini: boolean;
  onClick: () => void;
}

export const ToggleZoomButton = ({
  isMini,
  onClick,
}: ToggleZoomButtonProps) => {
  return (
    <>
      <Button shape="circle" onClick={onClick}>
        {isMini ? (
          <ShrinkOutlined style={{ fontSize: "16px" }} />
        ) : (
          <ExpandAltOutlined style={{ fontSize: "16px" }} />
        )}
      </Button>
    </>
  );
};
