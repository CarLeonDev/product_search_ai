import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Loader2 } from 'lucide-react';

interface StatusAlertProps {
  type: 'loading' | 'error' | 'empty';
  error?: Error;
  onRetry?: () => void;
}

export function StatusAlert({ type, error, onRetry }: StatusAlertProps) {
  if (type === 'loading') {
    return (
      <Alert variant="default">
        <Loader2 className="animate-spin text-gray-500" />
        <AlertTitle>Loading...</AlertTitle>
        <AlertDescription>
          Please wait while we are searching for the best products for you.
        </AlertDescription>
      </Alert>
    );
  }

  if (type === 'error') {
    return (
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
  }

  return (
    <Alert variant="default">
      <AlertTitle>No products found.</AlertTitle>
      <AlertDescription>
        Try again with a different query.
      </AlertDescription>
    </Alert>
  );
} 