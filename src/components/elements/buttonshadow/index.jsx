/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
const ButtonShadow = ({ isActive, id }) => {
    const setActive = () => {
        const shadowButton = document.querySelector(`#${id}`).classList
        shadowButton.remove('hidden')
        shadowButton.add('-translate-x-1')
    }

    const setUnactive = () => {
        const shadowButton = document.querySelector(`#${id}`).classList
        shadowButton.remove('-translate-x-1')
        shadowButton.add('hidden')
    }
    useEffect(() => {
        if (isActive) {
            setActive()
        } else {
            setUnactive()
        }

    }, [isActive])
    return (
        <div id={id} className="bg-[#4F4F4F] w-[68px] h-[68px] rounded-full absolute transition-all duration-1000" />
    )
}

export default ButtonShadow