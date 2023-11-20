import { useDispatch } from 'react-redux'

import Icon from '../../../assets/icons/quicks.svg'
import { setQuickMenu } from '../../../states/menuSlice'

const QuickButton = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(setQuickMenu())} className="flex justify-center items-center bg-primary-blue rounded-full w-[68px] h-[68px] p-6 cursor-pointer relative z-50">
            <img src={Icon} className='w-4/5' alt="icon" />
        </button>
    )
}

export default QuickButton