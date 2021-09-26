type PaginatedResponse<T> = {
  items: Array<T>;
  meta: {
    totalItems: number;
    itemCount: 10;
    itemsPerPage: 10;
    totalPages: 2;
    currentPage: 1;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export default PaginatedResponse;
