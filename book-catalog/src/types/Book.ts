export interface Book {
  _id?: string; // vem da API
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}

export interface BookFormProps {
  onAdd: (book: Book) => void;
}

export interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (book: Book) => void;
}