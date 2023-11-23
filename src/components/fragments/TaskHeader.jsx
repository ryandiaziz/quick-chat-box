/* eslint-disable react/prop-types */
import Button from '../elements/button'
import DropDownButton from '../elements/dropdownbutton'

const TaskHeader = () => {
    return (
        <div className={`flex justify-between items-center w-full pl-[85px]`}>
            <DropDownButton />
            <Button />
        </div>
    )
}

export default TaskHeader