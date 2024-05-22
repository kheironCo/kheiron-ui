export type IconCheckBoxProps = {
  checked?: boolean;
  size?: string;
  color?: string;
  background?: string;
};

export const IconCheckBox = ({
  checked = false,
  size = '20',
  color = '#796489',
  background = '#ded8e1',
}: IconCheckBoxProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
    <path
      fill={background}
      d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"
    />
    {checked && (
      <path
        fill={color}
        d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"
      />
    )}
  </svg>
);
