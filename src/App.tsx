import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Results from "./pages/Results";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biz-haqimizda" element={<About />} />
        <Route path="/galereya" element={<Gallery />} />
        <Route path="/natijalar" element={<Results />} />
        <Route path="/aloqa" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
      <PageLoader />
    </HashRouter>
  );
}
