import { BooksContext } from "./BooksContext";
import books from "../books.json";
import {  Library } from "../interfaces/books.interface";


interface props {
	children : JSX.Element | JSX.Element[]
}

export function BookProvider ({children} : props) {
	
	const {library} = books;
	const contextValue: Library ={
		library
	};

	return (
		<BooksContext.Provider value={contextValue}>

			{children}
			
		</BooksContext.Provider>
	);
} 