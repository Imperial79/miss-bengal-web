import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Signup1 from "./Pages/Signup1";
import Terms from "./Pages/Terms";
import Declaration from "./Pages/Declaration";
import UploadDocs from "./Pages/UploadDocs";
import Verification from "./Pages/Verification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup1 />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/upload-docs" element={<UploadDocs />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
