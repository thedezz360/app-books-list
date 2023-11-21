import { BooksState } from "../interfaces/books.interface";

type BooksActions = 
	{type: "bookToReadingList", payload: {id: string}} |
	{type: "bookToBooksList", payload: {id:string}}

export function booksReducer (state:BooksState, action:BooksActions):BooksState {

	switch(action.type){
	case "bookToReadingList":
		
		return {
			...state,
			library: state.library.filter( (libraryItem)=> (
				libraryItem.book.ISBN !== action.payload.id
			)),
			listReading: [...state.listReading, ...state.library.filter((libraryItem) =>(
				libraryItem.book.ISBN === action.payload.id
			))]
		};
	
	case "bookToBooksList":

		return{
			...state,
			listReading: state.listReading.filter ( libraryItem => (
				libraryItem.book.ISBN !== action.payload.id
			)),
			library : [...state.library, ...state.listReading.filter( libraryItem =>(
				libraryItem.book.ISBN === action.payload.id
			)
				
			)]
		};

	default:
		return state;
	}
}