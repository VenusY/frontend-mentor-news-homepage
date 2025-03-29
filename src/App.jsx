import './styles/reset.css';
import './styles/scss/App.scss';
import NavBar from './components/NavBar';
import MainArticle from './components/MainArticle';
import NewArticles from './components/NewArticles';
import OtherArticles from './components/OtherArticles';

export default function App() {
  return (
    <>
      <NavBar />

      <main className='articles-section'>
        <div className='articles-section__container'>
          <MainArticle />
          <NewArticles />
        </div>

        <OtherArticles />
      </main>
    </>
  );
}
