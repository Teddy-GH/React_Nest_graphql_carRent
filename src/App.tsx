import React from 'react';
import styled from 'styled-components';
import './App.css';
import tw from 'twin.macro';
import Homepage from './app/containers/HomePage';


const AppContainer = styled.div`
 ${tw`
   w-full
   h-full
   flex
   flex-col

 `}

`;

function App() {
  return (
    <AppContainer >
      <Homepage/>
    </AppContainer>
  );
}

export default App;
