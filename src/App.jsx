import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./ui/Spinner";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import "./styles/index.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  },
  []);

  return (
    <ThemeProvider>
      {isLoading && <Spinner />}
      <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} >
                <Route path=":board" />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AppLayout>
        </Router>
    </ThemeProvider>
  )
}

export default App;
