import contenedorProductos from './components/contenedorProductos/contenedorProductos';
import NavBar from './components/NavBar/NavBar';  
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
<>
<NavBar/>
<ItemListContainer greeting="Bienvenidos a Dietetica Good Food"/>
<contenedorProductos/>
</>
  );
}

export default App;
