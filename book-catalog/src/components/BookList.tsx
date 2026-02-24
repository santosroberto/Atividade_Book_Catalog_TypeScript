import type { Book } from "../types/Book";
import { BookItem } from "./BookItem";

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus: (book: Book) => void;
}

export function BookList({ books, onDelete, onToggleStatus }: BookListProps) {
  if (books.length === 0) {
    return (
      <p className="text-center text-slate-500">
        Nenhum livro cadastrado ainda.
      </p>
    );
  }

  return (
    <ul className="mt-4">
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}