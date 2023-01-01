import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
