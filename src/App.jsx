import "./App.css";
import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
const userData = [];
function App() {
  const [itemsContact, setItemsContact] = useState(() => {
    const lsItems = window.localStorage.getItem("contact");
    console.log("savedItems-", lsItems);
    console.log("JSON.parse(savedItems)-", JSON.parse(lsItems));
    if (lsItems !== null) {
      return JSON.parse(lsItems);
    } else {
      return userData;
    }
  });
  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(itemsContact));
  }, [itemsContact]);

  const [filter, setFilter] = useState("");
  const addContact = (newContact) => {
    setItemsContact((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (contactId) => {
    console.log(contactId);
    setItemsContact((prevContact) => {
      return prevContact.filter((item) => item.id !== contactId);
    });
  };

  const visibleContacts = itemsContact.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox filter={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </Section>
    </>
  );
}

export default App;
