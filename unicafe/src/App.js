import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text='Bad' rating={() => setBad(bad + 1)} />
      <Button text='Neutral' rating={() => setNeutral(neutral + 1)} />
      <Button text='Good' rating={() => setGood(good + 1)} />
      <h2>Statistics</h2>
      {bad === 0 && neutral === 0 && good === 0 ? (
        <div>No feedback given</div>
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} />
      )}
    </>
  )
}

export default App
