import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.bad * -1) / total
  const positive = props.good * (100 / total)

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='BAD' value={props.bad} />
          <StatisticLine text='NEUTRAL' value={props.neutral} />
          <StatisticLine text='GOOD ' value={props.good} />
          <StatisticLine text='AVERGAE' value={average} />
          <StatisticLine text='POSITIVE' value={positive} />
          <StatisticLine text='TOTAL' value={total} />
        </tbody>
      </table>
    </>
  )
}
export default Statistics
