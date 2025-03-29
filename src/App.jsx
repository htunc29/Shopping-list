import { useState, useEffect } from "react";
import List from "./components/List";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // items değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearList() {
    const onay = window.confirm(
      "Listedeki tüm ürünleri silmek istediğinizden emin misiniz?"
    );
    if (onay) setItems([]);
  }

  return (
    <>
      <Header />
      <div className="container pt-2">
        <Form onAddItem={handleAddItem} onClearList={handleClearList} />
        <List items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} />
        <Summary items={items} />
      </div>
    </>
  );
}

export default App;
