import { useNavigate } from 'react-router-dom'

function CompleteAndContinueButton(props) {
  const navigate = useNavigate()
  function completeAndContinue () {
    navigate(`/courses/${props.courseId}/lessons/${props.lessonId}`)
  }
  return (
    <button className="button primary" onClick={completeAndContinue}>
      Complete and continue
    </button>
  )
}

export default CompleteAndContinueButton
