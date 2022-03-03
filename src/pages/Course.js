import { useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import { Link } from 'react-router-dom'
import courses from '../courses'

function Course() {
  const { courseId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  return (
    <div className="Course page">
      <header>
        <p>
          <Link to={'/'}>Back to courses</Link>
        </p>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <Link className="button primary icon" to={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>
          Start course
        </Link>
      </header>
      <div>
        {course.lessons.map((lesson, index) => (
          <LessonSummary
            courseId={courseId}
            lesson={lesson}
            num={index + 1}
            key={lesson.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Course
