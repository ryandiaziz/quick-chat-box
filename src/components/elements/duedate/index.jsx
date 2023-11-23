import countDay from "../../../util/countDay"

const DueDate = ({ date }) => {
    return (
        <p className="text-indicator-red font-normal text-sm">{countDay(date)} Days Left</p>
    )
}

export default DueDate