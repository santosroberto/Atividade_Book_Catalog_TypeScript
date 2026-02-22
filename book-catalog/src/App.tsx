import { useEffect, useState } from "react";
import { Book } from "./types/Book";
import { api } from "./services/api";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  // GET - Listar livros
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

  // POST - Adicionar livro
  const handleAddBook = async (book: Book) => {
    try {
      const response = await api.post<Book>("", book);
      setBooks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  // DELETE - Remover livro
  const handleDeleteBook = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Erro ao remover livro:", error);
    }
  };

  // PUT - Atualizar status
  const handleToggleStatus = async (book: Book) => {
    const updatedBook = {...book, status: book.status === "Lido" ? "Não lido" : "Lido",
};

    try {
      await api.put(`/${book._id}`, updatedBook);

      setBooks((prev) => prev.map((b) => b._id === book._id ? { ...updatedBook } : b));
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  return (
    <div>
      <h1>📚 Catálogo de Livros</h1>

      <BookForm onAdd={handleAddBook} />

      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

export default App;
