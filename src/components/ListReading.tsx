import { useBooksContext } from "../hooks/useBooksContext";
import { Book } from "./Book";

export function ListReading (){
	const {booksState, bookToBooksList} = useBooksContext();
	const listReading = booksState.listReading;
	
	return(
		<div className="container-list-reading">
			<h2>ReadingList</h2>
			<div className="list-reading">
				{
					listReading.map(libraryItem => (
						<span 
							className="w-200"
							key={libraryItem.book.ISBN} 
							onClick={()=>{bookToBooksList(libraryItem.book.ISBN);}}
						>
							<Book 
								position="book-of-list-reading"
								book={libraryItem.book} 
							/>

						</span>
					))
				}

			</div>
		</div>
	);
}