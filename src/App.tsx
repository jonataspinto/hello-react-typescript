import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { light, dark} from './styles/themes';
import usePersisteThemedState from './utils/usePersistedThemeState';

import Header from './components/Header/header'

const App = () => {
  const [theme, setTheme] = usePersisteThemedState('theme', light)

  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light)
    console.log(theme);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme}>muda</button>
        <Header/>
        <GlobalStyles/>
        <Routes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
