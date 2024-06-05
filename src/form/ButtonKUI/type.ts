type HovType = {
  color?: string;
  backgroundColor: string;
};
export type ButtonVariant = 'filled' | 'outlined';
export type ButtonPalette = 'primary' | 'gold' | 'orange';
export type ButtonType = {
  color: string;
  backgroundColor: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  fontWeight?: string;
  '&:hover': HovType;
  '&:active': HovType;
};

export type ButtonListType = {
  [key in ButtonPalette]: {
    [key in ButtonVariant]: ButtonType;
  };
};
