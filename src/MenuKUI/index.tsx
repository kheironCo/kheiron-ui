import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { ButtonIconStyled, UlStyled, LiStyled, DivStyled } from './styles';

type MenuItem = Omit<Parameters<typeof LiStyled>[0], 'divider'> & { icon: ReactNode; text: string }

type MenuKUIProps = {
  items: MenuItem[];
  width?: string;
  marginLeft?: string;
};

export const MenuKUI: React.FC<MenuKUIProps> = ({ items, width = "150px", marginLeft = "0px"}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ready, setReady] = useState(false);
    const [position, setPosition] = useState({ top: 10, right: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const ulRef = useRef<HTMLUListElement | null>(null);

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
            setReady(true);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ulRef.current && 
                !ulRef.current.contains(event.target as Node) && 
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
                
            ) {
                setIsOpen(false);
            }

        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <DivStyled marginLeft={marginLeft}>
            <ButtonIconStyled ref={buttonRef} onClick={toggleDropdown}>
                <SlOptionsVertical />
            </ButtonIconStyled>
            {isOpen && ready && (
                <UlStyled ref={ulRef} top={position.top} right={position.right} width={width} onClick={()=>setIsOpen(false)}>
                    {items.map(({ icon, text, ...rest }, index) => {
                        let divider = index !== (items.length - 1);
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
