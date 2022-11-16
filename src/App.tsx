import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />}/>
        <Route path="*" element={<div>
          <h1>Ничего не найдено</h1>
        </div>}/>

      </Routes>
    </div>
  );
}

export default App;
