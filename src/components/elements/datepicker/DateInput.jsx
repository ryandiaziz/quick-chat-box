import CalanderIcon from "./CalanderIcon"

const DateInput = () => {
    return (
        <div className="relative">
            <input
                className="border border-primary-gray text-primary-dark placeholder:text-primary-dark w-[193px] h-[40px] rounded-[5px] bg-white px-[15px]"
                name="date"
                id="date"
                placeholder="Set Date"
                disabled
            />
            <CalanderIcon />
        </div>
    )
}

export default DateInput