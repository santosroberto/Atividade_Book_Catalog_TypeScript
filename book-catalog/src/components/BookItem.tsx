import type { BookItemProps } from "../types/Book";

export function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
  return (
    <li className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3 hover:shadow-lg transition">
      <div>
        <h3 className="font-semibold text-slate-800">{book.title}</h3>
        <p className="text-sm text-slate-500">{book.author}</p>

        <span
          className={`text-xs font-bold ${
            book.status === "Lido"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {book.status}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => book._id && onDelete(book._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Remover
        </button>

        <button
          onClick={() => onToggleStatus(book)}
          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
        >
          Status
        </button>
      </div>
    </li>
  );
}