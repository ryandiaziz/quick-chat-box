/* eslint-disable react/prop-types */
const MainBoxLayout = ({ children }) => {
    return (
        <section className="bg-white w-[734px] h-[737px] rounded-[5px] box-border px-8 py-6 fixed bottom-32 right-10 overflow-y-auto">
            {children}
        </section>
    )
}

export default MainBoxLayout