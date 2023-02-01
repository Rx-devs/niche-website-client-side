import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import PurchaseProduct from "./Pages/PurchaseProduct/PurchaseProduct";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    "fontFamily": `'Nunito', sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      light: '#FF3E30',
      main: '#FF3E30',
      dark: '#CE2029',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/home" element={<Home />}>
              </Route>
              <Route path="/login" element={<Login />}>
              </Route>
              <Route path="/register" element={<Register />}>
              </Route>
              {/* <Route path={`/exploreProducts`} element={<PrivateRoute><ExploreProducts /></PrivateRoute>}>
              </Route>
              <Route path={`/dashboard`} element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              </Route>
              <Route path={`/purchaseProduct/:productId`} element={<PrivateRoute><PurchaseProduct /></PrivateRoute>}>
              </Route> */}
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
