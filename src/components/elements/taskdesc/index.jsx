import EditIcon from "./EditIcon"
import InputDesc from "./InputDesc"

const TaskDesc = ({ text }) => {
    return (
        <div className="flex">
            <EditIcon />
            <InputDesc text={text} />
        </div>
    )
}

export default TaskDesc