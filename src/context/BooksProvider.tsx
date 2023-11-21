import { useReducer } from "react";
import { booksReducer } from "./booksReducer";
import { BooksContext } from "./BooksContext";
import {  BooksContextProps, BooksState } from "../interfaces/books.interface";
import books from "../books.json";


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

	const filterByGenre = (genre:string) => {
		dispatch({type:"filterByGenre", payload: {genre:genre}});
	};

	// set contextValue
	const contextValue: BooksContextProps ={
		booksState,
		bookToReadingList,
		bookToBooksList,
		booksListCount: booksState.library.length,
		listReadingCount: booksState.listReading.length,
		filterByGenre
	};

	return (
		<BooksContext.Provider value={contextValue}>

			{children}
			
		</BooksContext.Provider>
	);
} 