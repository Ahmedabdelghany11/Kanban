import { useState } from "react"
import TaskCart from "./TaskCart"
import Modal from "./Modal";
import { calcCompletedSubtasks } from "../utilities/helpers";

function TaskItem({task}) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <>
      <div className={`w-full p-6 rounded-lg bg-[var(--secondary-color)] relative flex flex-col gap-2 cursor-pointer`} onClick={handleOpenCart}>
        <h4 className={`text-lg font-bold tracking-wide`} >{task.title}</h4>
        <span className={`text-base font-bold text-gray-500`} >
          {task.subtasks ?
            `${calcCompletedSubtasks(task.subtasks)} of ${task.subtasks.length} subtasks` :
            `No subtasks`
          }
        </span>
      </div>
      {isCartOpen && 
        <Modal>
          <TaskCart isOpen={isCartOpen} close={handleCloseCart} task={task} />
        </Modal>
      }
    </>
  )
}

export default TaskItem