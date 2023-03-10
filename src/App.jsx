import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YogisShow } from "./YogisShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { YogisNew } from "./YogisNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yogis/:id" element={<YogisShow />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yogis/new" element={<YogisNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
