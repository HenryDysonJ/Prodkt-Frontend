import { useState } from 'react';
import _ from 'underscore';

interface IUsePageinationProps {
  totalRowCount: number;
  defaultPerPageCount: string;
  defaultPageNumber?: number;
}

function usePagination({ totalRowCount, defaultPerPageCount, defaultPageNumber = 1 }: IUsePageinationProps) {
  const [perPageCount, setPerPageCount] = useState<string>(defaultPerPageCount);
  const [pageNumber, setPageNumber] = useState<number>(defaultPageNumber);

  const handlePerPageChange = (c: string, callback: (val: number) => void) => {
    setPerPageCount(c);
    setPageNumber(defaultPageNumber);
    if (_.isFunction(callback)) {
      try {
        callback(parseInt(c));
      } catch (err) {
        console.error(`${c} is not a string.`);
      }
    }
  };

  const handlePageChange = (p: number, callback: (val: number) => void) => {
    setPageNumber(p);
    if (_.isFunction(callback)) {
      callback(p);
    }
  };

  return {
    numberOfPages: Math.max(1, Math.ceil(totalRowCount / parseInt(perPageCount))),
    perPageCount,
    handlePerPageChange,
    pageNumber,
    handlePageChange,
  };
}

export default usePagination;
