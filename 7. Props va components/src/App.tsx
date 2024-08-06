import  Avatar  from "./components/avatar";

function App() {
  const name = "Micheal Jackson"
  const description = "https://reqres.in/img/faces/9-image.jpg"
  return (
    <>
      <div>
        <h1>Component bilan hooklarni ishlashni o'rganamiz</h1>
        <Avatar name={name} description={description}></Avatar>
      </div>
    </>
  );
}

export default App;
