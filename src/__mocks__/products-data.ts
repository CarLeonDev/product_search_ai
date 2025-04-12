const image = 'https://via.placeholder.com/150';
const characteristics = [
  { emoji: '🌟', key: 'Feature 1', value: 'Value 1' },
  { emoji: '💡', key: 'Feature 2', value: 'Value 2' },
  { emoji: '👍', key: 'Feature 3', value: 'Value 3' },
  { emoji: '🔋', key: 'Feature 4', value: 'Value 4' },
  { emoji: '🔌', key: 'Feature 5', value: 'Value 5' },
];

export const productFullMock = {
  id: 'product-full',
  name: 'Product 1',
  description: 'Description 1',
  image,
  characteristics,
  reason: 'Reason 1',
};

export const productWithoutReasonMock = {
  id: 'product-without-reason',
  name: 'Product 1',
  description: 'Description 1',
  image,
  characteristics,
};

export const productWithoutImageMock = {
  id: 'product-without-image',
  name: 'Product 1',
  description: 'Description 1',
  characteristics,
  reason: 'Reason 1',
};

export const productWithManyCharacteristicsMock = {
  id: 'product-with-many-characteristics',
  name: 'Product 1',
  description: 'Description 1',
  characteristics: [...characteristics, ...characteristics],
};

export const productsDataMock = [
  productFullMock,
  productWithoutReasonMock,
  productWithoutImageMock,
  productWithManyCharacteristicsMock,
];