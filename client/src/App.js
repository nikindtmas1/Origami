
import './App.css';
import Hello from './components/Hello';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
      </header>

      <main>
        <PostList />
      </main>

    <footer>
    <p>All rights reserved &copy;</p>
    </footer>

    </div>
  );
}

export default App;
