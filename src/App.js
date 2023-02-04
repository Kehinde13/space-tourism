import React from 'react';
import { Header, Home } from './components';
import { Crew, Destination, Technology } from './pages'
import { 
  Navigate,
  Route, 
  Routes,
  BrowserRouter,
} from "react-router-dom";




function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Header />

       
       <Routes>
         <Route path="/" element={<Home />} />
       
         <Route path="/Destination" element={<Destination />} />
           
         <Route path="/Crew" element={<Crew />} />
           
         <Route path="/Technology" element={<Technology />} />

         <Route path="*" element={<Navigate to="/" replace />} />
           
       </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
