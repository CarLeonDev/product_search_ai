import { render, screen } from '@testing-library/react';
import { ProductGrid } from '@/components/product-grid';
import { productsDataMock } from '@/__mocks__/products-data';
describe('ProductGrid', () => {
  it('renders all products in the grid', () => {
    render(<ProductGrid products={productsDataMock} />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(productsDataMock.length);
  });

  it('handles empty products array', () => {
    render(<ProductGrid products={[]} />);
    expect(screen.queryAllByTestId('product-card')).toHaveLength(0);
  });
}); 