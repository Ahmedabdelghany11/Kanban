import { useRef } from "react"
import useModalEffects from "../hooks/useModalEffects";
import { HiDotsVertical } from "react-icons/hi";
import SubTask from "./SubTask";

function TaskCart({isOpen, close}) {
  const cartRef = useRef();

  useModalEffects(cartRef, isOpen, close);

  return (
    <div ref={cartRef} className={`w-[90%] sm:w-[50%] bg-[var(--secondary-color)] p-8 rounded-lg relative flex flex-col gap-8`}>
      <div className={`w-full flex items-center justify-between gap-3 relative`} >
        <h4  className={`text-base font-bold`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus reiciendis tempora facere, dolorum, modi consequuntur laudantium dolorem explicabo necessitatibus assumenda animi eius deleniti cum, at laborum rerum. Cum, accusantium officiis.</h4>
        <span className={`w-20 h-20 flex items-center justify-center relative`}>
          <HiDotsVertical className={`sm:text-2xl text-xl font-bold`} />
        </span>
      </div>

      <p className={`leading-normal text-sm text-gray-400`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo architecto nobis, dolore, obcaecati soluta illo, ex nesciunt doloremque exercitationem voluptas accusantium. Sequi sunt reprehenderit culpa eveniet facilis cumque, ipsam adipisci?
      </p>

      <div className={`w-full flex flex-col gap-3 relative`}>
        <span className={`font-bold text-sm`} >Subtasks (2 of 3)</span>
        <SubTask />
        <SubTask />
        <SubTask />
      </div>

      <div className={`w-full flex flex-col gap-3 relative`}>
        <label className={`font-bold text-sm`} htmlFor="status">Status</label>
        <select name="status" id="status" className={`w-full shadow-[0_0_1px_0_var(--text-color)] bg-[var(--secondary-color)] p-3 cursor-pointer`}>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  )
}

export default TaskCart