import { Container } from './components/app.styled';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};

export default App;
