import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearnUseEffect from './problems/learnUseEffect/learnUseEffect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/use-effect' element={<LearnUseEffect/>} />    
        <Route path='/*' element={<LearnUseEffect/>} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
