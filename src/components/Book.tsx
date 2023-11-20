import { Book } from "../interfaces/books.interface";
import "./book.css";

interface props {
	book:Book
}

export function Book ({book}:props){
	return (
		
		<div className="book">
			<img src={book.cover} alt={book.title} />
		</div>

		
	);
}