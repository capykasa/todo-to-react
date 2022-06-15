import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../scss/app.scss';
import Main from './main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
