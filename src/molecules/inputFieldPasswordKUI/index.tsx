import { PasswordInputKUI } from '../../atom/PasswordInputKUI';
import { AtomDiv} from '../../element';
import { LabelKUI } from '../LabelKUI';
import { AlignType, PositionType } from './types';

export type inputFieldPasswordKUIProps = {
  label: string;
  position?: PositionType;
  align?: AlignType;
};

export const inputFieldPasswordKUI = ({ label,  position = 'top', align = 'left'}: inputFieldPasswordKUIProps) => {
  return (
    <AtomDiv className="KUI-inputfieldPassword-root">
      <LabelKUI position={position} align={align} label={label}>
        <PasswordInputKUI />
      </LabelKUI>
    </AtomDiv>
  );
};
