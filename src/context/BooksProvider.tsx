import { BooksContext } from "./BooksContext";
import books from "../books.json";
import {  BooksContextProps, BooksState } from "../interfaces/books.interface";
import { useReducer } from "react";
import { booksReducer } from "./booksReducer";


interface props {
	children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: BooksState = {
	library : books.library,
	listReading : []
};

export function BookProvider ({children} : props) {
	
	const [booksState, dispatch] = useReducer(booksReducer, INITIAL_STATE);

	// const {library} = books;
	// const listReading: Book[]= [];

	const bookToReadingList = (id:string) =>{
		dispatch({type:"bookToReadingList", payload:{id: id}});
	};

	const bookToBooksList = (id:string) => {
		dispatch({type:"bookToBooksList", payload: {id: id}});
	};

	// set contextValue
	const contextValue: BooksContextProps ={
		booksState,
		bookToReadingList,
		bookToBooksList
	};

	return (
		<BooksContext.Provider value={contextValue}>

			{children}
			
		</BooksContext.Provider>
	);
} 