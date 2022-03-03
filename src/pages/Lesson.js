import { Link, useParams } from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'
import CompleteAndContinueButton from "../components/CompleteAndContinueButtons";
import courses from '../courses'

function Lesson() {
  const { courseId, lessonId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson)
    const nextIndex = (currentIndex + 1) % course.lessons.length
    return course.lessons[nextIndex].id
  }
  return (
    <div className="Lesson page">
      <header>
        <p>
          <Link to={'/courses/' + course.id}>Back to {course.title}</Link>
        </p>
        <h1>{lesson.title}</h1>
      </header>
      <div className="Content">
        <Vimeo video={lesson.vimeoId} responsive />
        <CompleteAndContinueButton courseId={courseId} lessonId={nextLessonId()}/>
      </div>
    </div>
  )
}

export default Lesson
