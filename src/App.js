
import { useState } from 'react';
import './App.css';
//Hooks -> useState, cambiar de estado a las variables
import logo  from './img/logo192.png';
function App() {

  const [contenido, setContenido] = useState("");
  const estilo1 = {backgroundColor: "green"};
  const estilo2 = {backgroundColor: "blue"};
  const [colores, setColores] = useState(estilo1);
  const [semaforo, setSemaforo] = useState("");

  
  const cambiarTexto= ()=> {
    setContenido("Hello Welcome to my site");
    setSemaforo({ color: "red", texto: "Stop" });
  }
  const mostrarImagen = ()=>{
    setContenido(<img src={logo} alt='img'/>);
    setSemaforo({color:"yellow", texto: "Alerta"})
  }
  const colorDeFondo = ()=>{
    setColores(estilo2);
    setSemaforo({color:"green", texto: "Avanzar"})
  }
  return (
    <>
      <button onClick={()=>{cambiarTexto()}}>Luz Roja</button>
      <button onClick={()=>{mostrarImagen()}}>Luz Amarilla</button>
      <button onClick={()=>{colorDeFondo()}}>Luz Verde</button>
      <div style={{ backgroundColor: semaforo.color, borderRadius: "50%", width: "150px", height: "150px", margin: "100px", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <p style={{ textAlign: "center", color: "white" }}>{semaforo.texto}</p>
        </div>
      
    </>
  );
}

export default App;
