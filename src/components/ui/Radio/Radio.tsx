import React from "react";

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  checked,
  onChange,
}) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {value}
    </label>
  );
};

export default RadioButton;
