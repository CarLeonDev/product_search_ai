import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from '@/components/search-form';

describe('SearchForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnStop = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows stop button when loading', () => {
    render(<SearchForm isLoading={true} onSubmit={mockOnSubmit} onStop={mockOnStop} />);

    const stopButton = screen.getByTestId('stop-button');

    expect(stopButton).toHaveAttribute('type', 'reset');
  });

  it('shows search button when not loading', () => {
    render(<SearchForm isLoading={false} onSubmit={mockOnSubmit} onStop={mockOnStop} />);

    const submitButton = screen.getByTestId('submit-button');

    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('calls onSubmit when form is submitted', () => {
    render(<SearchForm isLoading={false} onSubmit={mockOnSubmit} onStop={mockOnStop} />);

    const input = screen.getByTestId('search-input');
    const form = screen.getByTestId('search-form');

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('calls onStop when stop button is clicked', () => {
    render(<SearchForm isLoading={true} onSubmit={mockOnSubmit} onStop={mockOnStop} />);

    const stopButton = screen.getByTestId('stop-button');

    fireEvent.click(stopButton);

    expect(mockOnStop).toHaveBeenCalled();
  });
}); 