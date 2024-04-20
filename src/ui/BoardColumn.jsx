import { GoDotFill } from "react-icons/go"
import TaskItem from "./TaskItem"

function BoardColumn({name}) {
  return (
    <div className={`flex items-center flex-col gap-5 relative min-w-[30%]`}>
      <h4 className={`column_heading ${name} w-full flex items-center justify-start gap-2 text-base font-bold tracking-wider`}>
        <GoDotFill className="text-3xl" />
        {name.toUpperCase()} (4)
      </h4>
      <TaskItem />
    </div>
  )
}

export default BoardColumn