/* eslint-disable react/prop-types */
import Button from '../elements/button'
import DropDownButton from '../elements/dropdownbutton'

const TaskHeader = () => {
    return (
        <div className={`flex justify-between items-center w-full mb-[22px]`}>
            <DropDownButton />
            <Button />
        </div>
    )
}

export default TaskHeader