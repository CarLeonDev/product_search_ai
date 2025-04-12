import { AlertType } from '@/hoc/with-alert';

export const withAlert = (type: AlertType) => {
  return function MockAlert({ error, onRetry }: { error?: Error; onRetry?: () => void }) {
    switch (type) {
      case AlertType.LOADING:
        return (
          <div data-testid="loading-alert">
            <div>Loading...</div>
            <div>Please wait while we are searching for the best products for you.</div>
          </div>
        );
      case AlertType.ERROR:
        return (
          <div data-testid="error-alert">
            <div>Oops! Something went wrong.</div>
            <div>{error?.message}</div>
            {onRetry && <button onClick={onRetry}>Try again</button>}
          </div>
        );
      case AlertType.EMPTY:
        return (
          <div data-testid="empty-alert">
            <div>No products found.</div>
            <div>Try again with a different query.</div>
          </div>
        );
      default:
        return null;
    }
  };
}; 