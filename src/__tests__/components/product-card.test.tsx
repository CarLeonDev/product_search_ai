import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from '@/components/product-card';
import { productFullMock, productWithManyCharacteristicsMock, productWithoutImageMock, productWithoutReasonMock } from '@/__mocks__/products-data';
import { IMAGE_PLACEHOLDER } from '@/constants/common';
import { Product } from '@/schemas/products-schema';
import { DeepPartial } from 'ai';

const shouldShowRequiredFields = (product: DeepPartial<Product>) => {
  expect(screen.getByTestId('product-card')).toBeInTheDocument();
  expect(screen.getByTestId('product-card-image')).toBeInTheDocument();
  expect(screen.getByTestId('product-card-name')).toBeInTheDocument();
  expect(screen.getByTestId('product-card-description')).toBeInTheDocument();
  expect(screen.getByTestId('product-card-characteristics')).toBeInTheDocument();

  product.name && expect(screen.getByTestId('product-card-name')).toHaveTextContent(product.name);
  product.description && expect(screen.getByTestId('product-card-description')).toHaveTextContent(product.description);
};

describe('ProductCard', () => {
  it("renders product card", () => {
    render(<ProductCard product={productFullMock} />);
    shouldShowRequiredFields(productFullMock);
  });

  it("renders product card without reason", () => {
    render(<ProductCard product={productWithoutReasonMock} />);

    expect(screen.queryByTestId('product-card-reason')).not.toBeInTheDocument();

    shouldShowRequiredFields(productWithoutReasonMock);
  });

  it("renders product card without image", () => {
    render(<ProductCard product={productWithoutImageMock} />);

    const image = screen.getByTestId('product-card-image');
    fireEvent.error(image);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', IMAGE_PLACEHOLDER);

    shouldShowRequiredFields(productWithoutImageMock);
  });

  it("renders product with a lot of characteristic should show 5 characteristics and the rest should be hidden", () => {
    render(<ProductCard product={productWithManyCharacteristicsMock} />);

    const characteristics = screen.getAllByTestId('product-card-characteristic');
    expect(characteristics).toHaveLength(5);

    shouldShowRequiredFields(productWithManyCharacteristicsMock);
  });
}); 