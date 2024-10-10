import { useState } from 'react'

import './App.css'

function App() {
  return (
    /**contenedor , fila y una seccion,
     * con longitud maxima permitida.
     *  */
    <div className="container">
      <div className="row">
        <section className="col-md-6">
         <Card><CardBody header="hola mundo" title="titulo del compoennte" text="texto del componente" /></Card>
         <List />
       </section>
     </div>
    </div>
  )
}

export default App
