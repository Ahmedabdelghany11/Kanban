import BoardColumn from "../ui/BoardColumn"

function Home() {
  return (
    <div className={`home hidescrollbar flex-1 relative p-5 flex items-start gap-5 overflow-auto`}>
      <BoardColumn name="todo" />
      <BoardColumn name="doing" />
      <BoardColumn name="done" />
    </div>
  )
}

export default Home