
import React from 'react';
import { ChangeEvent } from 'react';
import { AtomDiv, AtomLabel, AtomInput } from '../../element';
import { css } from '@emotion/react';

<<<<<<< HEAD


=======
>>>>>>> f1a9d24501b83cf443d4bcfb41b8ba86af119724
export type InputFieldKUIProps = {
    value?: string;
    label?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>)=> void;
<<<<<<< HEAD
    placeHolder?: string;
  };

 
export const InputFieldKUI = ({ label,value, placeHolder = "", handleChange}: InputFieldKUIProps) => {
=======
  };

 
export const InputFieldKUI = ({ label= "Ejemplo",value, handleChange}: InputFieldKUIProps) => {
>>>>>>> f1a9d24501b83cf443d4bcfb41b8ba86af119724


  return (
    
    <AtomDiv
<<<<<<< HEAD
    className='KUI-inputfield-root'
=======
    className='KUI-inputfield'
>>>>>>> f1a9d24501b83cf443d4bcfb41b8ba86af119724
    css={css({
      display: "flex",
      flexDirection: "column",
     
    })}>
        <AtomLabel css={css({
          color: "grey",
          margin: "5px",
        })}
<<<<<<< HEAD
        htmlFor='toinput'
        className='KUI-inputfield-label'
        >{label }</AtomLabel>
        <AtomInput
        className='KUI-inputfield-input'
        placeholder={placeHolder}
        value={value} onChange={handleChange} css={
=======
        htmlFor='toinput'>{label + ": "}</AtomLabel>
        <AtomInput value={value} onChange={handleChange} css={
>>>>>>> f1a9d24501b83cf443d4bcfb41b8ba86af119724
        css({
          width: "200px",
          border: "none", 
          margin: "5px",
          "border-bottom": "2px solid grey",
          "&:focus ": {
            outline: "none",
            border: "none",
            "border-bottom": "solid #33c4b5 2px"
          }
        })} id='toinput' />
    </AtomDiv>
    
  )
}

