import { useState } from "react"; //precisa gerar import no JS
import type { FormEvent } from "react"; //é só para checagem de tipo
import type { Book, BookFormProps } from "../types/Book";

export function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook: Book = { title, author, status };
    onAdd(newBook);

    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 p-6 rounded-xl shadow mb-6 space-y-4"
    >
      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select
        className="w-full p-3 border rounded-lg"
        value={status}
        onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition" type="submit">Adicionar Livro</button>
    </form>
  );
}