/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"

import TaskCheck from "../elements/taskcheck"
import TaskTitle from "../elements/tasktitle"
import DueDate from "../elements/duedate"
import PreviewDate from "../elements/previewdate"
import DropDownIcon from "../elements/dropdownbutton/DropDownIcon"
import MoreIcon from "../elements/moreicon"
import DatePicker from "../elements/datepicker"
import TaskDesc from "../elements/taskdesc"

const TaskBox = ({ index, todo, id, isComplete }) => {
    const { unCompleteTask } = useSelector((state) => state.task)
    return (
        <article className={`py-[22px] ${(index || (isComplete && unCompleteTask.length)) && 'border-t-2 border-primary-gray'}`}>
            <div className="flex items-start justify-between">
                <div className="flex items-start">
                    <TaskCheck
                        id={todo.id}
                        index={index}
                        isCheck={todo.complete}
                        checkID={`checkIcon${id}`}
                        uncheckID={`uncheckIcon${id}`}
                    />
                    <TaskTitle
                        text={todo.name}
                        complete={todo.complete}
                    />
                </div>
                <div className="flex items-star">
                    {!todo.complete && <DueDate date={todo.due} />}
                    <PreviewDate date={todo.due} />
                    <DropDownIcon />
                    <MoreIcon
                        id={todo.id}
                        index={index}
                        complete={todo.complete}
                    />
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