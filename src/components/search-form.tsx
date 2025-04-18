import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Square } from "lucide-react";

interface SearchFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
}

export function SearchForm({ isLoading, onSubmit, onStop }: SearchFormProps) {
  return (
    <form
      data-testid="search-form"
      aria-label="Search Form"
      className="flex flex-col items-center justify-center relative w-full"
      onSubmit={onSubmit}
    >
      <Input
        data-testid="search-input"
        aria-label="Search Input"
        className="w-full h-12 pl-4 pr-12 text-base rounded-full"
        type="text"
        autoFocus
        required
        minLength={5}
        maxLength={100}
        placeholder="How can I help you find the perfect product?"
      />

      {isLoading ? (
        <Button
          data-testid="stop-button"
          aria-label="Stop Button"
          title="Stop"
          className="absolute right-2 h-8 w-8 rounded-full flex items-center justify-center"
          size="icon"
          variant="secondary"
          type="reset"
          onClick={onStop}
        >
          <Square width={14} height={14} className="text-gray-500" />
        </Button>
      ) : (
        <Button
          data-testid="submit-button"
          aria-label="Submit Button"
          title="Search"
          className="absolute right-2 h-8 w-8 rounded-full flex items-center justify-center"
          type="submit"
          size="icon"
          variant="secondary"
        >
          <Search width={16} height={16} className="text-gray-500" />
        </Button>
      )}
    </form>
  );
}
