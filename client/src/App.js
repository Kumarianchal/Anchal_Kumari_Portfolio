import { ToastContainer } from 'react-toastify';
import './App.css'
import MainLayout from './components/layouts/MainLayout';



function App() {
  return (
    <>
      <ToastContainer position="top-right"/>
      <MainLayout/>
    </>
  );
}

export default App;
