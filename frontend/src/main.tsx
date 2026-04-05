import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './styles/index.css'
import App from './App.tsx'

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
    </BrowserRouter>
  )
