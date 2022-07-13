import Routes from "../src/router/index";
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
// import theme from '@styles/theme'


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  );
}

export default App;