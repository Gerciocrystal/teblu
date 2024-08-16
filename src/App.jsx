import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SlideWrapper from "./pages/SlideWrapper";
import Data from "./pages/Data";
import OTP from "./pages/OTP";
import Loading from "./pages/Loading";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/main" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SlideWrapper />} />
        <Route path="/data" element={<Data />} />
        <Route path="/opt" element={<OTP />} />
        <Route path="/loader" element={<Loading />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
