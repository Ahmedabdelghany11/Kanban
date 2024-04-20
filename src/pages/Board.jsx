import useBroad from "../features/useBroad";
import Spinner from "../ui/Spinner";
import BoardColumn from "../ui/BoardColumn"


function Board() {
    const {isLoading, broad} = useBroad();

    if(isLoading) return <Spinner />

    return (
        <div className={`w-full relative flex items-start gap-5 overflow-auto hidescrollbar`}>
        {broad &&
            broad?.columns?.map(column => (
                <BoardColumn column={column} key={column.name} />
            ))}
        </div>
    )
}

export default Board