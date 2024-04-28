
import React from 'react';
import { ChangeEvent } from 'react';
import { AtomDiv, AtomLabel, AtomInput } from '../../element';
import { css } from '@emotion/react';



export type InputFieldKUIProps = {
    value?: string;
    label?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>)=> void;
    placeHolder?: string;
  };

 
export const InputFieldKUI = ({ label,value, placeHolder = "", handleChange}: InputFieldKUIProps) => {


  return (
    
    <AtomDiv
    className='KUI-inputfield-root'
    css={css({
      display: "flex",
      flexDirection: "column",
     
    })}>
        <AtomLabel css={css({
          color: "grey",
          margin: "5px",
        })}
        htmlFor='toinput'
        className='KUI-inputfield-label'
        >{label }</AtomLabel>
        <AtomInput
        className='KUI-inputfield-input'
        placeholder={placeHolder}
        value={value} onChange={handleChange} css={
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

