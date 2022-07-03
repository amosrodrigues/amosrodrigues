import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './services/firebase';

import { PortfolioProvider } from './contexts/PortfolioContext'

import { AuthContextProvider } from './contexts/AuthContext'

ReactDOM.render(
  <BrowserRouter>
    <PortfolioProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </PortfolioProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
