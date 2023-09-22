import Home from "../pages/home";
const AppRoutes = () => {
    // Utilizamos useRoutes para configurar las rutas de nuestra aplicación
    const routes = useRoutes([
      {
        path: "/", // Ruta de inicio
        element: <Home />, // Componente a mostrar cuando la ruta coincide
      },
      {
        path: "*", // Ruta comodín, se usa cuando ninguna otra ruta coincide
        element: <ErrorPage />, // Componente para la página de error
      },
      
    ]);
  
    // Devolvemos las rutas configuradas
    return routes;
  };
  
  // Definimos un componente llamado RoutesWrapper que envuelve la aplicación
  const RoutesWrapper = ({children}) => {
    return (
      <BrowserRouter> {/* Usamos BrowserRouter para gestionar las rutas */}
        {children} {/* Pasamos los componentes hijos como prop */}
        <AppRoutes /> {/* Renderizamos las rutas configuradas */}
      </BrowserRouter>
    );
  };
  
  // Exportamos el componente RoutesWrapper
  export default RoutesWrapper;