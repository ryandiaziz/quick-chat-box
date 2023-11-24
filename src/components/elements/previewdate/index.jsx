/* eslint-disable react/prop-types */
import formatDate from '../../../util/dateFormat'

const PreviewDate = ({ date }) => {
    return (
        <p className="text-primary-dark font-normal text-sm ml-5 self-start">{formatDate(date)}</p>
    )
}

export default PreviewDate