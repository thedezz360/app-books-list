import {BooksList} from "./components/BooksList.tsx";
import { BookProvider } from "./context/BookProvider.tsx";
import "./App.css";

function App() {
 

	return (
		<BookProvider>
			<div className="layout">
				<BooksList />

				<h2>ReadingList</h2>

			</div>
		</BookProvider>
	);
}

export default App;
