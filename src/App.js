// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <RecipeList />
    </div>
  );
}

export default App;
