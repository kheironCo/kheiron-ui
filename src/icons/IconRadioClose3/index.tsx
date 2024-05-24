type IconRadioOpenParams = {
  size?: string;
  color?: string;
  className: string;
};

export const IconRadioClose3 = ({
  size = '24',
  color = '#000000',
  className,
}: IconRadioOpenParams) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>

  </svg>
);
