import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2 } from 'lucide-react';

export const AlertType = {
  LOADING: 'loading',
  ERROR: 'error',
  EMPTY: 'empty',
} as const;

type AlertType = (typeof AlertType)[keyof typeof AlertType];



export const withAlert = (type: AlertType) => {
  switch (type) {
    case AlertType.LOADING:
      return () => (
        <Alert variant="default">
          <Loader2 className="animate-spin text-gray-500" />
          <AlertTitle>Loading...</AlertTitle>
          <AlertDescription>
            Please wait while we are searching for the best products for you.
          </AlertDescription>
        </Alert>
      );
    case AlertType.ERROR:
      return ({ error, onRetry }: { error?: Error, onRetry?: () => void }) => (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Oops! Something went wrong.</AlertTitle>
          <AlertDescription>
            <p>{error?.message}</p>
            {onRetry && (
              <Button variant="outline" size="sm" className="text-foreground" onClick={onRetry}>
                Try again
              </Button>
            )}
          </AlertDescription>
        </Alert>
      );
    case AlertType.EMPTY:
    default:
      return () => (
        <Alert variant="default">
          <AlertTitle>No products found.</AlertTitle>
          <AlertDescription>
            Try again with a different query.
          </AlertDescription>
        </Alert>
      );
  }

};
