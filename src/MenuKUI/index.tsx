import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { ButtonIconStyled, UlStyled, LiStyled, DivStyled } from './styles';

type MenuItem = Omit<Parameters<typeof LiStyled>[0], 'divider'> & { icon: ReactNode; text: string };

type MenuKUIProps = {
  items: MenuItem[];
  width?: string;
  marginLeft?: string;
};

export const MenuKUI: React.FC<MenuKUIProps> = ({ items, width = '150px', marginLeft = '0px' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 10, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  return (
    <DivStyled marginLeft={marginLeft}>
      <ButtonIconStyled ref={buttonRef} onClick={toggleDropdown}>
        <SlOptionsVertical />
      </ButtonIconStyled>
      {isOpen && (
        <UlStyled
          top={position.top}
          right={position.right}
          width={width}
          onClick={() => setIsOpen(false)}
        >
          {items.map(({ icon, text, ...rest }, index) => {
            const divider = index !== items.length - 1;
            return (
              <LiStyled key={index} divider={divider} {...rest}>
                {icon} {text}
              </LiStyled>
            );
          })}
        </UlStyled>
      )}
    </DivStyled>
  );
};
