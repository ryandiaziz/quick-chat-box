import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'

import DropDownIcon from "./DropDownIcon"
import { getTodosData } from "../../../states/taskSlice"

function DropDownButton() {
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)

    const showHandler = () => {
        const dropdownMenu = document.getElementById('dropDownMenu').classList
        dropdownMenu.remove('hidden')
        dropdownMenu.add('flex')
    }

    const hideHandler = () => {
        const dropdownMenu = document.getElementById('dropDownMenu').classList
        dropdownMenu.remove('flex')
        dropdownMenu.add('hidden')
    }

    const todoHandler = (id) => {
        setIsShow(false)
        dispatch(getTodosData(id))
    }

    useEffect(() => {
        if (isShow) {
            showHandler()
        } else {
            hideHandler()
        }
    }, [isShow])

    return (
        <div className="relative">
            <div>
                <button onClick={() => setIsShow(!isShow)} className="border border-primary-dark rounded-[5px] py-2 px-4 flex justify-center items-center text-primary-dark font-bold">
                    My Tasks
                    <DropDownIcon />
                </button>
            </div>
            <div id="dropDownMenu" className="absolute z-10 -left-[85px] mt-2 hidden flex-col w-[288px] h-[80px] bg-white rounded-[5px] border border-primary-dark">
                <div onClick={() => todoHandler(1)} className="flex-grow flex items-center cursor-pointer">
                    <h3 className="ml-4 ">Personal Errands</h3>
                </div>
                <hr className="border-primary-dark" />
                <div onClick={() => todoHandler(2)} className="flex-grow flex items-center cursor-pointer">
                    <h3 className="ml-4 ">Urgent To-Do</h3>
                </div>
            </div>
        </div>
    )
}

export default DropDownButton
