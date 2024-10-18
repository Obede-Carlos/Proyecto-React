import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Carlos", "lucia", "Mario", "david"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo ", elemento);
  }
  return (
    /**contenedor , fila y una seccion,
     * con longitud maxima permitida.
     *  */
    <main>
      <div className="container-lg">
        <div className="row">
          <section className="col-md-12">
          <Card><CardBody header="hola mundo" title="titulo del compoennte" text="texto del componente" /></Card>
          </section>
        </div>
      </div>
      <div className="container-lg">
        <div className="row">
          <section className="col-md-12">
          <List data={list} onSelect={handleSelect}/>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
