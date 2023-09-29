import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    nombre:  "Vargas",
    puesto: "jefe",
    foto: "https://avatars.githubusercontent.com/u/134750586?v=4",
    equipo: "Front End",
    fav: true
  },
  {
    id: uuid(),
    nombre:  "Christian Velasco",
    puesto: "Head de Alura e instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    fav: false
  }
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación", 
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }, 
    {
      id: uuid(),
      titulo: "Front End", 
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science", 
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops", 
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "Ux y Diseño", 
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil", 
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión", 
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
  ])
//ternario --> condicion ? seMuestra : noSeMuestra
// condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

//registrar colaborador
  
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador: ", colaborador)
  //Spread Operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color equipo
  const actualizarColor = (color,id) => {
    console.log("actualizar ", color, id)
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id: uuid() }])
  }

  //like 

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario/> : <></> */}
      {mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
       equipos.map((equipo) => <Equipo 
       datos={equipo} 
       key={equipo.titulo} 
       colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
       eliminarColaborador={eliminarColaborador}
       actualizarColor={actualizarColor}
       like={like}
       />
       )
      }

      <Footer/>

    </div>
  );
}

export default App;
