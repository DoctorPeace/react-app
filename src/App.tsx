import ListGroup from "./components/ListGroup";

function App() {
  let items = ['Edinburgh', 'Glasgow', 'Aderdeen', 'North Berwick',];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;