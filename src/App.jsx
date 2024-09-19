import "./App.css";
// import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
// const userData = [];
function App() {
  return (
    <>
      <Section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox
          // filter={filter} onFilter={setFilter}
          />
          <ContactList />
        </Container>
      </Section>
    </>
  );
}

export default App;
