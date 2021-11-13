
import Hello from './components/Hello';
import PostList from './components/PostList';
import Navigation from './components/Navigation/Navigation';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import style from './App.module.css'

function App() {
  return (
    <div className={style.app}>
      {/* <header>
      </header> */}
     
        <Navigation />
        <Aside />
        <main>
        {/* <PostList /> */}
        </main>
        <Footer />
    {/* <footer>
    <p>All rights reserved &copy;</p>
    </footer> */}

    </div>
  );
}

export default App;
