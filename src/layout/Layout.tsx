import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import ScrollToTop from "../components/scrollToTop";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
        <ScrollToTop />
        <Container>
          <main>{props.children}</main>
        </Container>
      <Footer />
    </>
  );
};

export default Layout;
