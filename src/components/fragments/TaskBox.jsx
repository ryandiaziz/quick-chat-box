/* eslint-disable react/prop-types */
import TaskCheck from "../elements/taskcheck"
import TaskTitle from "../elements/tasktitle"
import DueDate from "../elements/duedate"
import PreviewDate from "../elements/previewdate"
import DropDownIcon from "../elements/dropdownbutton/DropDownIcon"
import MoreIcon from "../elements/moreicon"
import DatePicker from "../elements/datepicker"
import TaskDesc from "../elements/taskdesc"

const TaskBox = ({ index, todo, id }) => {
    return (
        <article className={`py-[22px] ${index && 'border-t-2 border-primary-gray'}`}>
            <div className="flex items-start justify-between">
                <div className="flex items-start">
                    <TaskCheck
                        checkID={`checkIcon${id}`}
                        uncheckID={`uncheckIcon${id}`}
                        isCheck={todo.complete}
                    />
                    <TaskTitle text={todo.name} />
                </div>
                <div className="flex items-star">
                    <DueDate date={todo.due} />
                    <PreviewDate date={todo.due} />
                    <DropDownIcon />
                    <MoreIcon />
                </div>
            </div>
            <div className="ml-[45px] mt-4 ">
                <DatePicker />
                <TaskDesc text={todo.desc} />
            </div>
        </article>
    )
}

export default TaskBox