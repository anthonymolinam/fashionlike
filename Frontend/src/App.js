import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';
import { ExtraBox } from './components/extra';


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px; 
  align-items: center;
  justify-content: center;
`;

function App() {
  return <AppContainer>
  <ExtraBox/>
  <AccountBox/>
  </AppContainer>;
}

export default App;
