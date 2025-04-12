import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2 } from 'lucide-react';

export const AlertType = {
  LOADING: 'loading',
  ERROR: 'error',
  EMPTY: 'empty',
} as const;

export type AlertType = (typeof AlertType)[keyof typeof AlertType];



export const withAlert = (type: AlertType) => {
  switch (type) {
    case AlertType.LOADING:
      const LoadingAlert = () => (
        <Alert data-testid="loading-alert" variant="default">
          <Loader2 className="animate-spin text-gray-500" />
          <AlertTitle>Loading...</AlertTitle>
          <AlertDescription>
            Please wait while we are searching for the best products for you.
          </AlertDescription>
        </Alert>
      );

      LoadingAlert.displayName = 'LoadingAlert';

      return LoadingAlert;
    case AlertType.ERROR:
      const ErrorAlert = ({ error, onRetry }: { error?: Error, onRetry?: () => void }) => (
        <Alert data-testid="error-alert" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Oops! Something went wrong.</AlertTitle>
          <AlertDescription>
            <p>{error?.message}</p>
            {onRetry && (
              <Button data-testid="error-alert-retry-button" variant="outline" size="sm" className="text-foreground" onClick={onRetry}>
                Try again
              </Button>
            )}
          </AlertDescription>
        </Alert>
      );

      ErrorAlert.displayName = 'ErrorAlert';

      return ErrorAlert;
    case AlertType.EMPTY:
    default:
      const EmptyAlert = () => (
        <Alert data-testid="empty-alert" variant="default">
          <AlertTitle>No products found.</AlertTitle>
          <AlertDescription>
            Try again with a different query.
          </AlertDescription>
        </Alert>
      );

      EmptyAlert.displayName = 'EmptyAlert';

      return EmptyAlert;
  }

};
