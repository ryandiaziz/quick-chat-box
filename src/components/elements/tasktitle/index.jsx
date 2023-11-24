// eslint-disable-next-line react/prop-types
const TaskTitle = ({ text, complete }) => {
    return (
        <h1 className={`${complete ? 'text-primary-gray' : 'text-primary-dark'} font-bold text-base/none m-0 max-w-[335px] leading-tight ${complete && 'line-through'}`}>{text}</h1>
    )
}

export default TaskTitle