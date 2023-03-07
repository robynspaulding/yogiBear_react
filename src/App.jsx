import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YogisShow } from "./assets/YogisShow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yogis/:id" element={<YogisShow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
