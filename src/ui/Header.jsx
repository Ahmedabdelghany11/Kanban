import { HiDotsVertical, HiPlusSm } from "react-icons/hi"
import logoPath from "/logo-mobile.svg"
import { useState } from "react";
import TaskForm from "./TaskForm";
import Modal from "./Modal";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleOpenForm() {
    setIsFormOpen(true);
  }

  function handleCloseForm() {
    setIsFormOpen(false);
  }

  return (
    <header className={`h-20 p-5 bg-[var(--secondary-color)] shadow-[1px_0_1px_0_var(--text-color)] flex items-center justify-between`}>
      <img src={logoPath} alt={"Kanban"} className={`w-8 inline-block sm:hidden`} />
          <select className={`text-md tracking-wide inline-block sm:hidden bg-[var(--secondary-color)]`}>
            <option value="Platform Launch">Platform Launch</option>
            <option value="Marketing Plan">Marketing Plan</option>
            <option value="Roadmap">Roadmap</option>
          </select>
          <h3 className={`text-xl tracking-wide sm:inline-block hidden`}>Platform Launch</h3>
        <div className={`flex gap-1 items-center sm:gap-2`}>
          <button onClick={handleOpenForm} className={`sm:px-4 px-2 py-2 rounded-3xl bg-[var(--third-color)] text-sm sm:text-base font-bold flex items-center gap-3 cursor-pointer`}>
            <HiPlusSm className={`text-xl font-bold`} />
            Add New Task
          </button>
          <span className={`sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center cursor-pointer`}>
            <HiDotsVertical className={`sm:text-2xl text-xl font-bold`} />
          </span>
        </div>
        {isFormOpen && 
          <Modal>
            <TaskForm isOpen={isFormOpen} close={handleCloseForm} />
          </Modal>
          }
    </header>
  )
}
// window.innerWidth <= 767

export default Header