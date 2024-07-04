import { useEffect, useState } from 'react';

export type UsePaginationProps = {
  totalPages: number;
  neighbors: number;
};

export const usePagination = ({ neighbors, totalPages }: UsePaginationProps) => {
  const lengthPage = 5 + neighbors * 2;
  const center = Math.floor(lengthPage / 2);
  const [pages, setPages] = useState<('...' | number)[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const updatePages = () => {
    if (totalPages <= lengthPage) {
      setPages(Array.from({ length: totalPages }, (_, i) => i + 1));
      return;
    }
    const low = currentPage <= 3 + neighbors;
    const high = currentPage > totalPages - (3 + neighbors);
    if (low) {
      setPages(
        Array.from({ length: lengthPage }, (_, i) => {
          if (i < 3 + neighbors * 2) return i + 1;
          else return i === lengthPage - 1 ? totalPages : '...';
        }),
      );
      return;
    }
    if (high) {
      setPages(
        Array.from({ length: lengthPage }, (_, i) => {
          if (i === 0) return i + 1;
          if (i < center - neighbors) return '...';
          else return totalPages - lengthPage + i + 1;
        }),
      );
      return;
    }
    setPages(
      Array.from({ length: lengthPage }, (_, i) => {
        if (i === 0) return i + 1;
        if (i === lengthPage - 1) return totalPages;
        if (i > center - neighbors - 1 && i < center + neighbors + 1)
          return i - center + currentPage;
        return '...';
      }),
    );
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((old) => old + 1);
  };
  const previewPage = () => {
    if (currentPage > 1) setCurrentPage((old) => old - 1);
  };
  const setPage = (p: number) => {
    setCurrentPage(p);
  };

  useEffect(updatePages, [currentPage]);

  return { currentPage, pages, nextPage, previewPage, setPage };
};
