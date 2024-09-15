import './App.css';
import { CourseList } from './components/CourseList/CourseList';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Input } from './components/Input/Input';
import { Textarea } from './components/Textarea/Textarea';
import { Footer } from './components/Footer/Footer';
import { Advice } from './components/Advice/Advice';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Advice />
        <CourseList />
      </main>
      <Form>
        {(formData, handleChange, errors) => (
          <>
            <Input
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Textarea
              name="question"
              placeholder="Sua dúvida"
              value={formData.question}
              onChange={handleChange}
              error={errors.question}
            />
          </>
        )}
      </Form>
      <Footer />
    </>
  );
}

export default App;
