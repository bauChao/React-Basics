  //import Message from "./Message";
  import ListGroup from "./components/ListGroup";

  function App(){
     let items = ["Facebook", "Twitter", "Instagram", "Tiktok", "GCash"];
     const handleSelectItem = (item : string) => {
      console.log(item);
     }
    return <div><ListGroup items={items} heading="Application" onSelectedItem={handleSelectItem}/></div>;
  }

  export default App; 