import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <p>Here is some content for the quiz.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default Quiz;