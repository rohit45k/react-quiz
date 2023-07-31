
import { useEffect, useState } from "react";
import ShowQueue from "./components/ShowQueue";
import Form from "./components/Form";

function App() {

  const [queue, setQueue] = useState([
    {
      name: 'A',
      que: [50, 20, 10]
    },
    {
      name: 'B',
      que: [20, 20, 10]
    },
    {
      name: 'C',
      que: [10, 20]
    },
    {
      name: 'D',
      que: [10, 20, 10, 10]
    },
    {
      name: 'E',
      que: [10, 20, 30, 20]
    },

  ])

  useEffect(() => {
    const newQueue = [...queue];
    const updateQueueInterval = setInterval(() => {
      newQueue.forEach((row) => {
        if(row.que.length === 0) return
        row.que[0] === 1 ? row.que.shift() : row.que[0] -= 1
      })
      setQueue(newQueue)
    }, 1000)
    return () => clearInterval(updateQueueInterval)
  }, [queue])

  function addToQueue(num) {
    const totalItems = queue.map(q => {
      return q.que.reduce((a, b) => a+b, 0)
    })
    console.log(totalItems);
    const minIndex = totalItems.reduce((prevIndex, value, index) => value < totalItems[prevIndex] ? index : prevIndex, 0)
    let newQueue = [...queue];
    let newElement = newQueue[minIndex]
    newElement.que.push(num)
    newQueue.splice(minIndex, 1, newElement)
    setQueue(newQueue)
  }


  return (
    <div className="App">
      <Form addToQueue={addToQueue}/>
      <ShowQueue queue={queue} />
    </div>
  );
}

export default App;
