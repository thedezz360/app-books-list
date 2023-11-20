import { createContext } from "react";
import {  Library } from "../interfaces/books.interface";



// creamos el contexto con un valor predeterminado
export const BooksContext = createContext<Library>({} as Library);