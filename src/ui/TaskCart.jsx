import { useRef, useState } from "react"
import useModalEffects from "../hooks/useModalEffects";
import { HiDotsVertical } from "react-icons/hi";
import SubTask from "./SubTask";
import { calcCompletedSubtasks } from "../utilities/helpers";

function TaskCart({task, isOpen, close}) {
  const cartRef = useRef();
  const [status, setStatus] = useState(task.status.toLowerCase() || "todo");

  function handleChangeStatus(e) {
    setStatus(e.target.checked);
  }

  useModalEffects(cartRef, isOpen, close);

  return (
    <div ref={cartRef} className={`w-[90%] sm:w-[50%] bg-[var(--secondary-color)] p-8 rounded-lg relative flex flex-col gap-8`}>
      <div className={`w-full flex items-center justify-between gap-3 relative`} >
        <h4  className={`text-base font-bold`}>{task.title}</h4>
        <span className={`w-12 h-12 flex items-center justify-center relative`}>
          <HiDotsVertical className={`text-xl font-bold`} />
        </span>
      </div>

      <p className={`leading-normal text-sm text-gray-400`}>
        {task.description || "No Description for this task"}
      </p>

      <div className={`w-full flex flex-col gap-3 relative`}>
        <span className={`font-bold text-sm`} >
          Subtasks
          {task?.subtasks && 
            ` (${calcCompletedSubtasks(task.subtasks)} of ${task.subtasks.length})`
          }
        </span>
        {task?.subtasks && 
          task?.subtasks?.map(subtask => (
            <SubTask key={subtask.title} subtask={subtask} />
          ))
        }
      </div>

      <div className={`w-full flex flex-col gap-3 relative`}>
        <label className={`font-bold text-sm`} htmlFor="status">Status</label>
        <select 
          value={status} 
          onChange={handleChangeStatus} 
          name="status" 
          id="status" 
          className={`w-full shadow-[0_0_1px_0_var(--text-color)] bg-[var(--secondary-color)] p-3 cursor-pointer`}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  )
}

export default TaskCart