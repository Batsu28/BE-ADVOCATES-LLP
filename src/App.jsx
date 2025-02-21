import "./App.css";
import Layout from "./components/layout";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Attorney from "./pages/attorney";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Service />
              </PageTransition>
            }
          />
          <Route
            path="/attorney/:id"
            element={
              <PageTransition>
                <Attorney />
              </PageTransition>
            }
          />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
