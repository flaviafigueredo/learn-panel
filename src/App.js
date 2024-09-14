import './App.css';
import { CourseList } from './components/CourseList/CourseList';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import { Textarea } from './components/Textarea/Textarea';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <CourseList />
      <Form>
        <Input placeholder="Seu nome" />
        <Input placeholder="Seu e-mail" />
        <Textarea placeholder="Sua dúvida" />
        <Button text="Enviar" />
      </Form>
      <Footer />
    </>
  );
}

export default App;
