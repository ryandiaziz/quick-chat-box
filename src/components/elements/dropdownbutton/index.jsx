import DropDownIcon from "./DropDownIcon"

function DropDownButton() {
    return (
        <div className="relative">
            <div>
                <button className="border border-primary-dark rounded-[5px] py-2 px-4 flex justify-center items-center text-primary-dark font-bold">
                    My Tasks
                    <DropDownIcon />
                </button>
            </div>
        </div>
    )
}

export default DropDownButton
