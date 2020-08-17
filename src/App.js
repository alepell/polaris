import React from 'react';
import GlobalStyle from './styles/global';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Cover from './components/Cover';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <GlobalStyle />
      <TopHeader />
      <Header />
      <MainSection />
      <Cover />
      <Footer />
    </>
  );
}

export default App;
