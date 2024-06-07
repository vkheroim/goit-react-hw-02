export default function Feedback({ feedback, positiveFeedbackPercentage }) {
  const { good, neutral, bad } = feedback;

  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}
