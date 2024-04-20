import { GoDotFill } from "react-icons/go"
import TaskItem from "./TaskItem"

function BoardColumn({column}) {
  return (
    <div className={`flex items-center flex-col gap-5 relative min-w-[300px]`}>
      <h4 className={`column_heading ${column.name.toLowerCase()} w-full flex items-center justify-start gap-2 text-base font-bold tracking-wider`}>
        <GoDotFill className="text-3xl" />
        {column.name.toUpperCase()} ({column?.tasks?.length || 0})
      </h4>
      {column?.tasks &&
        column?.tasks?.map(task => (
          <TaskItem key={task.title} task={task} />
        ))
      }
    </div>
  )
}

export default BoardColumn