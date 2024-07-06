import { Paragraph } from '../../../element';
import { ButtonStyled } from '../styles';

type ButtonPageProps = { current: boolean; page: number | string; onClick?: (p: number) => void };

export const ButtonPage = ({ current, page, onClick }: ButtonPageProps) => {
  const handleClick = () => {
    if (onClick && !isNaN(Number(page))) onClick(Number(page));
  };
  return (
    <ButtonStyled
      bgcolor={current ? '#C39FE3' : undefined}
      hover={{ bgcolor: '#C39FE3' }}
      variant="filled"
      onClick={handleClick}
    >
      <Paragraph>{page.toString()}</Paragraph>
    </ButtonStyled>
  );
};
