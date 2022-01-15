import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CodechefDetails from './pages/CodechefDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/codechef" element={<CodechefDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
