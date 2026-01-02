import Navigation from './components/Navigation'
import Habits from './pages/Habits'
import HabitTracker from './pages/HabitTracker'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
        <Navigation/>

        <main className="max-w-6xl mx-auto p-8">
          <Routes>
            <Route index element={<HabitTracker />} />
            <Route path="habits" element={<Habits />} />
          </Routes>
        </main>
      </div>

    </>
  )
}

export default App
