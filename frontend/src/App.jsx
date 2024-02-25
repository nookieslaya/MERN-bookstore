import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBooks from "./pages/EditBooks.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import {Routes, Route} from "react-router-dom";
const App = () => {
    return (
  <div>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/books/create' element={<CreateBooks/>}/>
         <Route path='/books/details/:id' element={<ShowBook/>}/>
         <Route path='/books/edit/:id' element={<EditBooks/>}/>
         <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
     </Routes>
  </div>
    )
}

export default App