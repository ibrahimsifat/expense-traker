import { Link, useMatch } from "react-router-dom";
import SearchBar from "../components/allTransactions/SearchBar";
export default function Layout({ children }) {
  const matchRoute = useMatch("alltransactions");
  return (
    <div className="App">
      <div
        className={`header ${
          matchRoute && "flex justify-between items-center"
        }`}
      >
        <Link to="/" className="underline-none text-2xl">
          <h1> Expense Tracker</h1>
        </Link>
        {matchRoute && <SearchBar />}
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}
