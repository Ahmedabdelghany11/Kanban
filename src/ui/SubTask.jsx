import { useState } from "react"

function SubTask() {
  const [isDone, setIsDone] = useState(false);

  function handleChangeStatus(e) {
    setIsDone(e.target.checked);
  }

  return (
    <div className={`w-full p-5 bg-[var(--main-color)] relative flex items-center justify-start gap-3 rounded-lg`} >
      <input type="checkbox" name="subtask" id="subtask" value="" onChange={handleChangeStatus} className={`bg-red relative`}/>
      <label htmlFor="subtask" className={`font-bold text-base ${isDone && "text-gray-400 line-through"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
    </div>
  )
}

export default SubTask