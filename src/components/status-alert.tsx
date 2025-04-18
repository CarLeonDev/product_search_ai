import { AlertType, withAlert } from "@/hoc/with-alert";

export interface StatusAlertProps {
  isLoading: boolean;
  isEmpty: boolean;
  error?: Error;
  onRetry?: () => void;
}

export function StatusAlert({
  isLoading,
  isEmpty,
  error,
  onRetry,
}: StatusAlertProps) {
  const getAlertType = () => {
    if (isEmpty && isLoading) return AlertType.LOADING;
    if (error) return AlertType.ERROR;
    if (isEmpty) return AlertType.EMPTY;

    return null;
  };

  const alertType = getAlertType();

  if (!alertType) return null;

  const AlertComponent = withAlert(alertType);

  return <AlertComponent error={error} onRetry={onRetry} />;
}
