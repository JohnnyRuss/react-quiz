import Switch from "react-switch";

import * as Styled from "./form.styled";
import { switchButtonConfig } from "@/lib/config";
import { useAppContext } from "@/Provider/AppProvider";

type SwitchFieldT = {
  label: string;
  title?: string;
  checked: boolean;
  disabled?: boolean;
  handleSwitch: (checked: boolean) => void;
};

const SwitchField: React.FC<SwitchFieldT> = ({
  title,
  label,
  checked,
  disabled,
  handleSwitch,
}) => {
  const { playHoverSound } = useAppContext();

  return (
    <Styled.SwitchBox title={title || ""}>
      <span>{label}</span>

      <Switch
        height={24}
        checked={checked}
        disabled={disabled}
        {...switchButtonConfig}
        onChange={(checked: boolean) => {
          playHoverSound();
          handleSwitch(checked);
        }}
      />
    </Styled.SwitchBox>
  );
};

export default SwitchField;
