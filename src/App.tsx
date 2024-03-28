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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className="font-bold">Aliens are Coming</h1>
        <div style={{ width: "200px", height: "200px", overflow: "visible" }}>
          <Spaceship />
        </div>
      </div>
    </div>
  )
}

export default App
