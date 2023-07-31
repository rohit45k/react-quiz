import Queue from "./Queue"

const ShowQueue = ({queue}) => {
  return (
    <div>
        <div className="grid">
            {
                queue.map(q => <Queue key={q.name} q={q} />)
            }
        </div>
    </div>
  )
}

export default ShowQueue