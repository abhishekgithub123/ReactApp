import Posts from './Posts';
import Comments from './Comments';
import Navbar from './Navbar';

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  element={<Posts />} />
          <Route path='/comments' element={<Comments />}/>
        </Routes>
      </Router>
  
    );
  }
  
  export default App;