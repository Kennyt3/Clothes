import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./component/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
// <Route path='/' element={<SharedLayout />}>
//   <Route path='pages' element={<Pages />} />
//   <Route path='services' element={<Services />} />

//   <Route path='projects' element={<SharedLayout />}>
//     <Route index element={<Projects />} />
//     <Route path='bathroom' element={<Bathroom />} />
//   </Route>

//   <Route path='blog' element={<Blog />} />
//   <Route path='contact' element={<Contact />} />
// </Route>
