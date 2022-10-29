import Ejercicio1 from "./assets/components/Ejercicio1"
import Ejercicio2 from "./assets/components/Ejercicio2"
import Ejercicio3 from "./assets/components/Ejercicio3"
import { Container } from "react-bootstrap";
import Ejercicio4y5Form from "./assets/components/Ejercicio4y5Form";


function App() {
   return (
    <div className="App">
      <Ejercicio1/>      
      <Ejercicio3 noteEj3="My Friend"/>
      <Ejercicio2 note="My Friend"/>      
      <hr/>
      
      <Container>
          <section>
            <h1>Lista de Tareas</h1>
            <hr/>
            <Ejercicio4y5Form/>
          </section>
      </Container>
      


    </div>
  )
}

export default App
