import { Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Store from './pages/Store'
// import StoreOwner from './pages/StoreOwner'
import OrderDetails from './pages/OrderDetails'
import Login from './pages/Login'
import { useState } from 'react'
import PasswordReset from './pages/Forgot'
// import Reset from './pages/Reset'
import { ContextApi } from './components/ContextApi'

function App() {
  const Id_pass = {
    email: 'admin123@gmail.com',
    password: 'admin'
  };
  /* ============== outlet ============== */
  const Layout = () => {
    const Navigate = useNavigate()
    const [logoutPop, setLogoutPop] = useState(false)
    const handleLogoutNo = () => {
      setLogoutPop(false)
    }
    const handleLogoutYes = () => {
      localStorage.setItem('auth', JSON.stringify(false))
      Navigate('/')
      window.location.reload();
      setLogoutPop(false);
    }
    return (
      <>
        <div style={{ display: `${logoutPop === true ? "" : "none"}` }} className='logoutPop' >
          <div>
            <p>Do you want logout?</p>
            <div>
              <button className='Btn1' onClick={handleLogoutYes} >Yes</button>
              <button className='Btn2' onClick={handleLogoutNo} >No</button>
            </div>
          </div>
        </div>
        <main style={{ display: 'flex' }} >
          <Sidebar setLogoutPop={setLogoutPop} />
          <div style={{ padding: "20px", width: "100%" }}>
            <Outlet />
          </div>
        </main>
      </>
    )
  }

  /* ============== protect route ============== */
  const localStorageValue = JSON.parse(localStorage.getItem("auth"));
  const ProtectedRoute = ({ children }) => {
    if (!localStorageValue) {
      return <Navigate to='/login' />
    }
    return children;
  }

  /* ============== create Route ============== */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute>
        <Layout />

      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/store',
          element: <Store />
        },
       
        {
          path: '/orderDetails',
          element: <OrderDetails />
        },

      ]

    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot',
      element: <PasswordReset />,
    },
    // {
    //   path: '/reset',
    //   element: <Reset />
    // }

  ])
  return (
    <>
      <ContextApi.Provider value={Id_pass} >
        <RouterProvider router={router} />
      </ContextApi.Provider>
    </>
  )
}

export default App
