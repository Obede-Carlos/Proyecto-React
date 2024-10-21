import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading)

  const list = ["Carlos", "lucia", "Mario", "david"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo ", elemento);
  }
  
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <CardBody header="hola mundo" title="titulo del componente" text="texto del componente" />
              {list.length !== 0 ? (
                <List data={list} onSelect={handleSelect}/>
              ) : (
                "No hay contenido"
              )}
              <Button isLoading={isLoading} onClick = {handleClick}>hola mundo</Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
