import Icon from '../../../assets/icons/quicks.png'

const QuickButton = () => {
    return (
        <button className="flex justify-center items-center bg-primary-blue rounded-full w-[68px] h-[68px] p-6 cursor-pointer">
            <img src={Icon} className='w-4/5' alt="icon" />
        </button>
    )
}

export default QuickButton