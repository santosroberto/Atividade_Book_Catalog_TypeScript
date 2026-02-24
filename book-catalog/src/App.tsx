import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import { api } from "./services/api";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get<Book[]>("");
        setBooks(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchBooks();
  }, []);

  const handleAddBook = async (book: Book) => {
    try {
      const response = await api.post<Book>("", book);
      setBooks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Erro ao remover livro:", error);
    }
  };

  const handleToggleStatus = async (book: Book) => {
    const updatedBook: Book = {
      ...book,
      status: book.status === "Lido" ? "Não lido" : "Lido",
    };

    try {
      await api.put(`/${book._id}`, updatedBook);

      setBooks((prev) => prev.map((b) => (b._id === book._id ? updatedBook : b))
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          📚 Catálogo de Livros
        </h1>

        <BookForm onAdd={handleAddBook} />

        <BookList
          books={books}
          onDelete={handleDeleteBook}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
}

export default App;
