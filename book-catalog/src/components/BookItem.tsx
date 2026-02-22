import { BookItemProps } from "../types/Book";

export function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
  return (
    <li>
      <strong>{book.title}</strong> - {book.author} | Status: {book.status}

      <button onClick={() => book._id && onDelete(book._id)}>Remover</button>

      <button onClick={() => onToggleStatus(book)}>Alterar Status</button>
    </li>
  );
}