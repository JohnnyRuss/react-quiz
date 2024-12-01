import { useState } from "react";

import Select, { SingleValue } from "react-select";

import * as Styled from "./form.styled";
import { useAppContext } from "@/Provider/AppProvider";

type SelectFieldT = {
  label: string;
  isDisabled?: boolean;
  value: SingleValue<{ value: string; label: string }>;
  options: Array<{ value: string; label: string }>;
  onChange: (value: SingleValue<{ value: string; label: string }>) => void;
};

const SelectField: React.FC<SelectFieldT> = ({
  value,
  label,
  options,
  onChange,
  isDisabled,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { playClickSound } = useAppContext();

  const onToggleMenu = (open: boolean) =>
    playClickSound(() => setIsOpenMenu(open));

  return (
    <Styled.SelectField>
      <span>{label}</span>

      <Select
        value={value}
        options={options}
        menuIsOpen={isOpenMenu}
        onMenuOpen={() => onToggleMenu(true)}
        onMenuClose={() => onToggleMenu(false)}
        className="select-box"
        isDisabled={isDisabled}
        classNamePrefix="select"
        onChange={(value) => onChange(value)}
      />
    </Styled.SelectField>
  );
};

export default SelectField;
