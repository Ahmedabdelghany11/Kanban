import Overlay from "./Overlay"

function Modal({children}) {
  return (
    <Overlay>
      <div
        className={`p-20 modal_window w-full h-[100vh] fixed text-white flex items-start justify-center 
        overflow-y-auto hidescrollbar transition-[var(--main-transition)]`}
      >
        {children}
      </div>
    </Overlay>
  )
}

export default Modal