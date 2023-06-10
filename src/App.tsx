import { Routes, Route } from 'react-router-dom';

import Editor from './views/Editor/Editor';
import ShowCase from './views/ShowCase/ShowCase';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Editor />}></Route>
      <Route path='/showcase' element={<ShowCase />}></Route>
    </Routes>
  );
}

export default App;