/* eslint-disable react/prop-types */
const TaskBox = ({ index }) => {
    return (
        <article className={`border border-red-500 flex py-[22px] ${index && 'border-t-2 border-primary-gray'}`}>

        </article>
    )
}

export default TaskBox