import "../css/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthUserProvider } from '../context/AuthUserContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
      <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
            />
    </>
  )
}

export default MyApp
