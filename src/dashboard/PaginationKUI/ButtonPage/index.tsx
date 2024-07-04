import { Paragraph } from '../../../element';
import { ButtonStyled } from '../styles';

type ButtonPageProps = { current: boolean; page: number | string; onClick?: (p: number) => void };

export const ButtonPage = ({ current, page, onClick }: ButtonPageProps) => {
  const handleClick = () => {
    if (onClick && !isNaN(Number(page))) onClick(Number(page));
  };
  return (
    <ButtonStyled variant={current ? 'filled' : 'outlined'} onClick={handleClick}>
      <Paragraph>{page.toString()}</Paragraph>
    </ButtonStyled>
  );
};
