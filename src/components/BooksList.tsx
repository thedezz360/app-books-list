import { ChangeEvent } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import { Book } from "./Book";


export function BooksList() {

	const {
		booksState, 
		bookToReadingList,
		booksListCount, 
		listReadingCount,
		filterByGenre
	} = useBooksContext();

	const {library} = booksState;

	const genres = Array.from( new Set(library.map(libraryItem => libraryItem.book.genre)));
	
	const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>)=>{
		console.log(e.target.value);
		filterByGenre(e.target.value);
	};

	return (
		<div className="container">
			<h1>{booksListCount} : Books available</h1>
			<h3>{listReadingCount} : On the Reading List</h3>

			{/* filtro */}

			<select name="filterByGenre" id="filterByGenre" onChange={handleSelectChange}>
				<option value="All">All</option>
				{
					genres.map((genre, index) => (
						<option key={index} value={genre}>{genre}</option>
					))
				}
			</select>

			{/* books list */}

			<div className="booksContainer">
				{
					library.map((libraryItem) => (
						<span 
							key={libraryItem.book.ISBN} 
							onClick={()=>{bookToReadingList(libraryItem.book.ISBN);}}
						>
							<Book  book={libraryItem.book}  />

						</span>

					))
				}

			</div>
		</div>
	);
}
