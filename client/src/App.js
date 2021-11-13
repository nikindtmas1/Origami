
import Hello from './components/Hello';
import PostList from './components/PostList';
import Navigation from './components/Navigation/Navigation';
import style from './App.module.css'

function App() {
  return (
    <div className={style.app}>
      {/* <header>
      </header> */}
     
        <Navigation />
        
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
