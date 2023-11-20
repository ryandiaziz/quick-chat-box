import Icon from '../../../assets/icons/search.svg'

const SearchBar = () => {
    return (
        <div className="relative">
            <input type="text" className="w-full px-3 py-[10px] border border-primary-gray rounded-[5px] focus:outline-none" placeholder="Search" />
            <img src={Icon} alt="icon" className='absolute w-5 right-3 top-[10px]' />
        </div>
    )
}

export default SearchBar