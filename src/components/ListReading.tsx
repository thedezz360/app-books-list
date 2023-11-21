import { useBooksContext } from "../hooks/useBooksContext";
import { Book } from "./Book";

export function ListReading (){
	const {booksState, bookToBooksList} = useBooksContext();
	const listReading = booksState.listReading;
	console.log(listReading);
	return(
		<div>
			<h2>ReadingList</h2>
			<div className="container-list-reading">
				{
					listReading.map(libraryItem => (
						<span 
							key={libraryItem.book.ISBN} 
							onClick={()=>{bookToBooksList(libraryItem.book.ISBN);}}
						>
							<Book 
								book={libraryItem.book} 
							/>

						</span>
					))
				}

			</div>
		</div>
	);
}