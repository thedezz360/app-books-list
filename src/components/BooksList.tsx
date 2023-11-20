import { useBooksContext } from "../hooks/useBooksContext";
import { Book } from "./Book";


export function BooksList() {
	const {library} = useBooksContext();
	console.log(library);
	return (
		<div>
			<h1>BooksList</h1>
			<div className="booksContainer">
				{
					library.map((libraryItem, index) => (
						<Book key={index} book={libraryItem.book}  />

					))
				}

			</div>
		</div>
	);
}
