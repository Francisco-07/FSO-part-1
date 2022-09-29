const MostVoted = ({ anecdotes, allVotes }) => {
  const highestVotes = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVotes)
  const winner = anecdotes[winnerIndex]
  if (highestVotes === 0) {
    return <p>No votes yet</p>
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVotes} votes</p>
    </div>
  )
}
export default MostVoted
