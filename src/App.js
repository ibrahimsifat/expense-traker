import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionPage from "./components/allTransactions/TransactionPage";
import Layout from "./components/Layout";
import Home from "./Home";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alltransactions" element={<TransactionPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
