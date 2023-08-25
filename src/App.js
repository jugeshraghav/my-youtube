import "./App.css";
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { AppLayout } from "./pages/AppLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Watch } from "./pages/Watch";
function App() {
  return (
    <div>
      {/* Navbar
  -3 sections
Body
 SideBar
  -MenuList
 MainContainer(home)
  -ButtonList
  -VideoContainer
    -videoCard
MainContainer(Watch)
  -SingleVideo
  -commentList
  -videoSuggestions */}

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
