import { render, screen } from '@testing-library/react';
import { StatusAlert } from '@/components/status-alert';


describe('StatusAlert', () => {
  it('renders nothing when no alert type is needed', () => {
    const { container } = render(
      <StatusAlert isLoading={false} isEmpty={false} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders loading alert when isLoading is true', () => {
    render(<StatusAlert isLoading={true} isEmpty={false} />);
    expect(screen.getByTestId('loading-alert')).toBeInTheDocument();
  });

  it('renders error alert when error is provided', () => {
    const error = new Error('Test error message');
    render(<StatusAlert isLoading={false} isEmpty={false} error={error} />);
    expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('renders empty alert when isEmpty is true', () => {
    render(<StatusAlert isLoading={false} isEmpty={true} />);
    expect(screen.getByTestId('empty-alert')).toBeInTheDocument();
  });

  it('shows retry button in error state when onRetry is provided', () => {
    const onRetry = jest.fn();
    render(
      <StatusAlert
        isLoading={false}
        isEmpty={false}
        error={new Error()}
        onRetry={onRetry}
      />
    );
    expect(screen.getByTestId('error-alert-retry-button')).toBeInTheDocument();
  });

  it('does not show retry button in error state when onRetry is not provided', () => {
    render(
      <StatusAlert
        isLoading={false}
        isEmpty={false}
        error={new Error()}
      />
    );
    expect(screen.queryByTestId('error-alert-retry-button')).not.toBeInTheDocument();
  });

  it('prioritizes loading state over other states', () => {
    render(
      <StatusAlert
        isLoading={true}
        isEmpty={true}
        error={new Error()}
      />
    );
    expect(screen.getByTestId('loading-alert')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-alert')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-alert')).not.toBeInTheDocument();
  });

  it('prioritizes error state over empty state', () => {
    render(
      <StatusAlert
        isLoading={false}
        isEmpty={true}
        error={new Error()}
      />
    );
    expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-alert')).not.toBeInTheDocument();
  });
}); 