import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearnCSRF from './problems/learnCSRF/learnCSRF';
import LearnJWT from './problems/learnJWT/learnJWT';
import LearnUseEffect from './problems/learnUseEffect/learnUseEffect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LearnJWT/>} />
        <Route path='/use-effect' element={<LearnUseEffect/>} />    
        <Route path='/*' element={<LearnUseEffect/>} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
