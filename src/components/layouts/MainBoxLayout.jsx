/* eslint-disable react/prop-types */
const MainBoxLayout = ({ children, id, className }) => {
    return (
        <section id={id} className={`bg-white w-[734px] h-[737px] rounded-[5px] box-border px-8 py-6 fixed bottom-32 right-10 overflow-y-auto transition-all ease-out duration-1000 ${className}`}>
            {children}
        </section>
    )
}

export default MainBoxLayout