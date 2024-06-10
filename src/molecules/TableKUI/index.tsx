import React from 'react';
import { AtomDiv, AtomTable, AtomTbody, AtomTd, AtomTh, AtomThead, AtomTr } from '../../element';

//Codigo boilerplate para limpiar los errores de componente
function TableKUI() {
  return (
    <AtomDiv>
      <AtomTable>
        <AtomThead>
          <AtomTh></AtomTh>
        </AtomThead>
        <AtomTbody>
          <AtomTr>
            <AtomTd></AtomTd>
          </AtomTr>
        </AtomTbody>
      </AtomTable>
    </AtomDiv>
  );
}

export default TableKUI;
