import { useState } from 'react';

function useProductFilter(initialValue = '') {
  const [filterText, setFilterText] = useState(initialValue);

  return [filterText, setFilterText];
}

export default useProductFilter;