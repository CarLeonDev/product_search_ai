import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Square } from 'lucide-react';

interface SearchFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
}

export function SearchForm({ isLoading, onSubmit, onStop }: SearchFormProps) {
  return (
    <form className="flex flex-col items-center justify-center relative w-full" onSubmit={onSubmit}>
      <Input
        className="w-full h-12 pl-4 pr-12 text-base rounded-full"
        type="text"
        autoFocus
        required
        minLength={5}
        placeholder="How can I help you find the perfect product?"
      />

      {isLoading ? (
        <Button type="reset" onClick={onStop} size="icon" variant="secondary" className="absolute right-2 h-8 w-8 rounded-full flex items-center justify-center">
          <Square width={14} height={14} className="text-gray-500" />
        </Button>
      ) : (
        <Button type="submit" size="icon" variant="secondary" className="absolute right-2 h-8 w-8 rounded-full flex items-center justify-center">
          <Search width={16} height={16} className="text-gray-500" />
        </Button>
      )}
    </form>
  );
} 