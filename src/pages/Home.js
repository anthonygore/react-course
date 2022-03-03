import CourseSummary from '../components/CourseSummary'
import courses from '../courses'

function Home() {
  return (
    <div className="Home page">
      <header>
        <h1>React Online Course Site</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course={course} key={course.id} />
      ))}
    </div>
  )
}

export default Home
