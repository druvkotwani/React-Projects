import "./App.css";
import Navigation from "./components/Navigation/navigation";
import ContactHeader from "./components/Contact/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
