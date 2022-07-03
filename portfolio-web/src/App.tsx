import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider} from 'styled-components';
import { PortfolioContext } from './contexts/PortfolioContext'

import GlobalStyle from './styles/global';

import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./pages/Skills/Skills";
import { Projects } from "./pages/Projects/Projects";

import { Contacts } from "./pages/Contacts/Contacts";
import { NewRoom } from "./pages/Contacts/NewRoom";
import { Room } from './pages/Room/Room';
import { AdminRoom } from './pages/Room/AdiminRoom';

function App() {
  const { theme } = useContext(PortfolioContext)

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/skills" element={ <Skills />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="/contact" element={ <Contacts />} />
          <Route path="/rooms/new" element={ <NewRoom /> } />
          <Route path="/rooms/:id" element={ <Room />}/>
          <Route path="/admin/rooms/:id" element={ <AdminRoom /> } />
        </Routes>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
