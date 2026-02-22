import { useState, FormEvent } from "react";
import { Book, BookFormProps } from "../types/Book";

export function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook: Book = {
      title,
      author,
      status,
    };

    onAdd(newBook);

    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Livro</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}
