import './App.css'
import { Spaceship } from './components/spaceship'

function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "#121212",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ width: "200px", height: "200px", overflow: "visible" }}>
        <Spaceship />
      </div>
    </div>
  )
}

export default App
