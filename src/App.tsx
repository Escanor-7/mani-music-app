import { Header } from "./components/Header";
import { MusicAlbumScroll } from "./components/MusicAlbumScroll/index";
import { ScrollUp } from "./components/ScrollUp";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {

  return (
    <>
      <Header />
      <MusicAlbumScroll categoryTitle='Musicas do momento' />
      <ScrollUp />
      <GlobalStyle />
    </>
  );
}