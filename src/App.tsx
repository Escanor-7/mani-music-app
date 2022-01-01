import { Header } from "./components/Header";
import { MusicList } from "./components/MusicList";
import { ScrollUp } from "./components/ScrollUp";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {

  return (
    <>
      <Header />
      <MusicList categoryTitle='Músicas do momento' />
      <MusicList categoryTitle='Músicas favoritas' />
      <MusicList categoryTitle='Músicas que você precisa conhecer' />
      <ScrollUp />
      <GlobalStyle />
    </>
  );
}