type IconOpenParams = {
  size?: string;
  color?: string;
  className?: string;
};

export const IconRadioOpen = ({ size = '24', color = '#5f6368', className }: IconOpenParams) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9 12C9 10.35 10.3383 9 11.9925 9C13.6466 9 15 10.35 15 12C15 13.65 13.6466 15 11.9925 15C10.3383 15 9 13.65 9 12Z"
        fill={color}
      ></path>
    
  </svg>
);
