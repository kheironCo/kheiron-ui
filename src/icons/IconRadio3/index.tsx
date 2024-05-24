type IconRadioOpenParams = {
  size?: string;
  color?: string;
  className: string;
};

export const IconRadioOpen3 = ({
  size = '24',
  color = '#000000',
  className,
}: IconRadioOpenParams) => (
  <svg viewBox="0 0 48 48" className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" fill={color}>
    
      
      <path d="M0 0h48v48H0z" fill="none"></path>
      
        <polygon points="30.953,11.905 30.953,8.095 8.095,8.095 8.095,39.905 39.905,39.905 39.905,20.75 36.095,20.75 36.095,36.095 11.905,36.095 11.905,11.905 "></polygon>{' '}
        <polygon points="41,7.172 24,24.172 17,17.172 14.171,20 21.172,27 21.171,27 24,29.828 26.828,27 43.828,10 "></polygon>{' '}
      
    
  </svg>
);
