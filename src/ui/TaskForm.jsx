import { useRef, useState } from "react";
import useModalEffects from "../hooks/useModalEffects";
import FormElement from "./FormElement";
import { useForm } from "react-hook-form";
import {  HiPlusSm, HiX } from "react-icons/hi";

function TaskForm({isOpen, close}) {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const formRef = useRef();
  const [status, setStatus] = useState("todo");
  const [subtasks, setSubtasks] = useState([]);

  useModalEffects(formRef, isOpen, close);

  function handleAddSubtask() {
    const newList = [...subtasks, {}];
    setSubtasks(newList);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function onSubmit() {}

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit(onSubmit)} className={`w-[90%] sm:w-[50%] bg-[var(--secondary-color)] p-8 rounded-lg relative flex flex-col gap-8`}>
      <h3 className={`font-bold text-lg tracking-wide`} >Add New Task</h3>
      <FormElement
        key="task title"
        label="Title"
        error={errors?.title?.message}
      >
        <input 
            id="titleInput"
            type="text"
            placeholder="e.g. Take coffee break"
            name="title"
            className="input input_title text-sm"
            // disabled={isFormLoading}
            {...register("title", {
              required: "This field is required",
            })}
          />
      </FormElement>

      <FormElement
        key="task description"
        label="Description"
        error={errors?.description?.message}
      >
        <textarea 
            id="description"
            type="text"
            placeholder="e.g. It's always good to take a break"
            name="description"
            className="input input_title text-sm resize-none h-40 pt-3"
            // disabled={isFormLoading}
            {...register("description", {
              required: "This field is required",
            })}
          />
      </FormElement>

      <div className={`form_element w-full flex flex-col gap-2 flex-wrap relative text-[var(--color-grey-800)] transition-[var(--main-transition)]`}>
        <h4 className="form_row_item_label flex-grow font-bold text-base">Subtasks</h4>
        {subtasks && 
          subtasks?.map(subtask => (
            <div className={`w-full flex items-center justify-between relative gap-5`} key={subtask.title}>
              <input 
                id="subTask"
                type="text"
                placeholder="e.g. Make a coffee"
                name="title"
                className="input input_title text-sm"
                // disabled={isFormLoading}
              />
              <span className={`w-16 h-16 flex items-center justify-center relative cursor-pointer`}>
                <HiX className={`text-xl`} />
              </span>
            </div>
          ))
        }
        <button onClick={handleAddSubtask} className={` px-2 py-2 w-full rounded-3xl bg-[var(--text-color)] text-[var(--main-color)] text-sm font-bold flex items-center justify-center gap-3 cursor-pointer`}>
          <HiPlusSm className={`text-xl font-bold`} />
          Add New Subtask
        </button>
      </div>

      <FormElement
        key="task status"
        label="Status"
      >
        <select 
          name="status" 
          id="status" 
          className={`w-full shadow-[0_0_1px_0_var(--text-color)] bg-[var(--secondary-color)] p-3 cursor-pointer`}
          value={status}
          onChange={handleStatusChange}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </FormElement>

      <button onClick={handleAddSubtask} className={` px-2 py-2 w-full rounded-3xl bg-[var(--third-color)] text-[var(--text-color)] text-sm font-bold flex items-center justify-center gap-3 cursor-pointer`}>
        Create Task
      </button>
    </form>
  )
}

export default TaskForm