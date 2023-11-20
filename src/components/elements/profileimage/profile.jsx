/* eslint-disable react/prop-types */
const Profile = ({ children, bg, className }) => {
    return (
        <div className={`${className} rounded-full w-[34px] h-[34px] flex justify-center items-center ${bg}`}>
            {children}
        </div>
    )
}

export default Profile