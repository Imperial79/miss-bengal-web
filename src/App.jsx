import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Signup1 from "./Pages/Signup1";
import Terms from "./Pages/Terms";
import Declaration from "./Pages/Declaration";
import UploadDocs from "./Pages/UploadDocs";
import Verification from "./Pages/Verification";
import Confirmation from "./Pages/Confirmation";
import AboutUs from "./Pages/AboutUs";
import EventsPage from "./Pages/EventsPage";
import Pageants from "./Pages/pageants";
import ContactUs from "./Pages/ContactUs";

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
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/pageants" element={<Pageants />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
