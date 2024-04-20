import { useState } from "react"

function SubTask({subtask}) {
  const [isDone, setIsDone] = useState(subtask.isCompleted);

  function handleChangeStatus(e) {
    setIsDone(e.target.checked);
  }

  return (
    <div className={`w-full p-5 bg-[var(--main-color)] relative flex items-center justify-start gap-3 rounded-lg`} >
      <input checked={isDone} type="checkbox" name="subtask" id="subtask" value="" onChange={handleChangeStatus} className={`bg-red relative`}/>
      <label htmlFor="subtask" className={`font-bold text-base ${isDone && "text-gray-400 line-through"}`}>{subtask.title}</label>
    </div>
  )
}

export default SubTask