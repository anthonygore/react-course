import data from '../data'
import CourseSummary from '../components/CourseSummary'
const { courses } = data

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
