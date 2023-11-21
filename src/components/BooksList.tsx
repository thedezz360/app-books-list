import { useBooksContext } from "../hooks/useBooksContext";
import { Book } from "./Book";


export function BooksList() {
	const {booksState, bookToReadingList} = useBooksContext();
	const {library} = booksState;
	//console.log(booksState);
	return (
		<div className="container">
			<h1>BooksList</h1>
			<div className="booksContainer">
				{
					library.map((libraryItem) => (
						<span key={libraryItem.book.ISBN} onClick={()=>{bookToReadingList(libraryItem.book.ISBN);}} >
							<Book  book={libraryItem.book}  />

						</span>

					))
				}

			</div>
		</div>
	);
}
