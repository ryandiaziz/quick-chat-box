/* eslint-disable react/prop-types */
import TaskCheck from "../elements/taskcheck"
import TaskTitle from "../elements/tasktitle"
import DueDate from "../elements/duedate"
import PreviewDate from "../elements/previewdate"
import DropDownIcon from "../elements/dropdownbutton/DropDownIcon"
import MoreIcon from "../elements/moreicon"
import DatePicker from "../elements/datepicker"
import TaskDesc from "../elements/taskdesc"

const TaskBox = ({ index }) => {
    return (
        <article className={`py-[22px] ${index && 'border-t-2 border-primary-gray'}`}>
            <div className="flex items-start justify-between">
                <div className="flex items-start">
                    <TaskCheck />
                    <TaskTitle />
                </div>
                <div className="flex items-star">
                    <DueDate />
                    <PreviewDate />
                    <DropDownIcon />
                    <MoreIcon />
                </div>
            </div>
            <div className="ml-[45px] mt-4 ">
                <DatePicker />
                <TaskDesc />
            </div>
        </article>
    )
}

export default TaskBox