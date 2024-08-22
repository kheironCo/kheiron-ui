import { ButtonStyled , ButtonIconStyled, UlStyled, LiStyled} from './styles';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { SlOptionsVertical } from "react-icons/sl";


type DropdownButtonProps = {
    items: {icon: ReactNode, text: string}[];
    width: string;
    marginLeft: string;
  };
  
  export const MiniModal: React.FC<DropdownButtonProps> = ({ items , width="150px", marginLeft = "0px" }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ 
        top: rect.top, 
        right: window.innerWidth - rect.right
      });
    }
  }, [isOpen]);
  
    return (
      <div style={{marginLeft: `${marginLeft}`}}>
        <ButtonIconStyled ref={buttonRef} onClick={toggleDropdown}>
          <SlOptionsVertical />
        </ButtonIconStyled>
        {isOpen && (
          <UlStyled  style={{ top: `${position.top}px`,  right: `${position.right}px`, width: `${width}`}} >
            {items.map((item, index) => (
              <LiStyled key={index} style={{ borderBottom: index !== items.length - 1 ? '1px solid #ccc' : 'none' }} >
                <ButtonStyled>{item.icon} {item.text}</ButtonStyled>
              </LiStyled>
            ))}
          </UlStyled>
        )}
      </div>
    );
  };