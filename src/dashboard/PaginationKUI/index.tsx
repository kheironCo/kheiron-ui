import { Root, ButtonStyled } from './styles';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { ButtonPage } from './ButtonPage';
import { usePagination, UsePaginationProps } from './usePagination';

export type PaginationKUIProps = Partial<UsePaginationProps>;

export const PaginationKUI = ({ totalPages = 1, neighbors = 0, onChange }: PaginationKUIProps) => {
  const { currentPage, pages, previewPage, nextPage, setPage } = usePagination({
    totalPages,
    neighbors,
    onChange,
  });

  return (
    <Root className="KUI-pagination-root">
      <ButtonStyled disabled={currentPage <= 1} variant="filled" onClick={previewPage}>
        <FaCaretLeft />
      </ButtonStyled>
      {pages.map((page, i) => (
        <ButtonPage
          key={`${i}-page-${page}`}
          onClick={setPage}
          current={Number(page) === currentPage}
          page={page}
        />
      ))}
      <ButtonStyled disabled={currentPage >= totalPages} variant="filled" onClick={nextPage}>
        <FaCaretRight />
      </ButtonStyled>
    </Root>
  );
};
