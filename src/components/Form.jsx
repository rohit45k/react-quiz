import { useRef } from "react"

const Form = ({addToQueue}) => {

    const itemRef = useRef()

    function callAddToQueue() {
        itemRef.current.value && addToQueue(itemRef.current.value);
        itemRef.current.value = ''
    }

  return (
    <div className="form">
        <input type="number" placeholder="enter # of items" ref={itemRef}/>
        <button onClick={callAddToQueue}>Add to Queue</button>
    </div>
  )
}

export default Form