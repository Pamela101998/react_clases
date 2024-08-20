import { useState } from 'react';

function useInStockFilter(initialValue = false) {
  const [inStockOnly, setInStockOnly] = useState(initialValue);

  return [inStockOnly, setInStockOnly];
}

export default useInStockFilter;