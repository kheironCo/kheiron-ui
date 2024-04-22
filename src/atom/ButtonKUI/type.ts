type HovType = {
  color?: string;
  backgroundColor: string;
};
export type ButtonVariant = 'filled' | 'outlined';
export type ButtonPalette = 'primary' | 'secondary';
export type ButtonType = {
  color: string;
  backgroundColor: string;
  border?: string;
  '&:hover': HovType;
  '&:active': HovType;
};

export type ButtonListType = {
  [key in ButtonPalette]: {
    [key in ButtonVariant]: ButtonType;
  };
};
