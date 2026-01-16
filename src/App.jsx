import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
