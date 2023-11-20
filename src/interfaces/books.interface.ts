interface Author{
	name: string,
	otherBooks: string[]
}

export interface Book{
	title : string,
	pages: number,
	genre: string,
	cover: string,
	synopsis: string,
	year: number,
	ISBN: string,
	author: Author
}

interface LibraryItem {
	book: Book
}

export interface Library{
	library: LibraryItem[]
}


