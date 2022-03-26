import Button from '@mui/material/Button';
import { BookList } from './components/BookList/BookList';
import { Header } from './components/Header/Header';


import './App.css';

const handleClick = () => {
  console.log('click!!!');
}

function App() {
  return (
    <div className="App">
      <Header />
      <BookList />
      <Button variant="contained" onClick={handleClick}>Click me!</Button>
      Nowy ostatni commit
    </div>
  );
}

export default App;
