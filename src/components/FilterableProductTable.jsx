import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import useProductFilter from '../hooks/useProductFilter';
import useInStockFilter from '../hooks/useInStockFilter';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useProductFilter();
  const [inStockOnly, setInStockOnly] = useInStockFilter();

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;