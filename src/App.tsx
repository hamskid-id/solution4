import { Toaster } from 'react-hot-toast'
import './App.css'
import { Home } from './pages/home'

function App() {

  return (
    <>
      <Home/>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
