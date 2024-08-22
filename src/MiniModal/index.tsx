import React, { useEffect, useRef, useState } from 'react';
import { SlOptionsVertical } from "react-icons/sl";


type DropdownButtonProps = {
    items: {icon: Element, text: string}[];
  };
  
  export const MiniModal: React.FC<DropdownButtonProps> = ({ items  }) => {
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
      <div style={{marginLeft: "300px"}}>
        <button ref={buttonRef} onClick={toggleDropdown} style={{borderRadius: "50%", cursor: "pointer"}}>
        <SlOptionsVertical />
        </button>
        {isOpen && (
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px', marginRight: "17px", border: '1px solid #ccc', borderRadius: '5px' , width: '200px', position: 'absolute', top: `${position.top}px`,  right: `${position.right}px`,}}>
            {items.map((item, index) => (
              <li key={index} style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #ccc' , textAlign: "center"}}>
               <button style={{border: "none", backgroundColor: "white"}}>{item.icon} {item.text}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };