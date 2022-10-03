import './styles/app.css';
import CreatePostSection from './components/organisms/CreatePostSection';
import Header from './components/organisms/Header';
import NewPostsSection from './components/organisms/NewPostsSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <CreatePostSection />
      <NewPostsSection />
    </div>
  );
}

export default App;
