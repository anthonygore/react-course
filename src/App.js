import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/courses/:courseId"
            element={<Course />}
          />
          <Route
            path="/courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
