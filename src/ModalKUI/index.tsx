import { ButtonStyled , ButtonIconStyled, UlStyled, LiStyled, DivStyled} from './styles';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { SlOptionsVertical } from "react-icons/sl";


type MenuItem = {
  id: number, icon: ReactNode, text: string
}

type MenuKUIProps = {
    items: MenuItem[];
    width: string;
    marginLeft: string;
    handleClick: (id:number) => void;
  };
  
  export const ModalKUI: React.FC<MenuKUIProps> = ({ items , width="150px", marginLeft = "0px", handleClick }) => {
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
      <DivStyled marginLeft={marginLeft}>
        <ButtonIconStyled ref={buttonRef} onClick={toggleDropdown}>
          <SlOptionsVertical />
        </ButtonIconStyled>
        {isOpen && (
          <UlStyled top={position.top} right={position.right} width={width}  >
            {items.map((item, index) => (
              <LiStyled key={index} items={items} index={index}
                onClick={() => {
                  handleClick(item.id)
                  setIsOpen(false)
                }}>
                <ButtonStyled onClick={() => {
                  handleClick(item.id)
                  setIsOpen(false)
                }
                  }>{item.icon} {item.text}</ButtonStyled>
              </LiStyled>
            ))}
          </UlStyled>
        )}
      </DivStyled>
    );
  };