export const Indicators = ({ indNumber }) => {
    return (
        <a href={`#item${indNumber}`} className="btn btn-xs">{indNumber}</a>
    )
}