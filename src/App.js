import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import WrongPage from './components/WrongPage/WrongPage';

const App = () => {
  // return (
  //   <Container>
  //     <Hero />
  //     <SearchForm />
  //     <List />
  //   </Container>
  // );

  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<WrongPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
