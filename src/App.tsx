import { Route, Routes } from 'react-router-dom'
import './App.css'
import GlobalStats from './pages/GlobalStats'
import Layout from './components/layout/Layout'
import PlayerStats from './pages/PlayerStats'





function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GlobalStats />} />
        <Route path="/player/:id" element={<PlayerStats />} />
      </Route>
    </Routes>
  )
}

export default App
