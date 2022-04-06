export const SmallText = ({ children, addclass }) => {
    return <p className={`text-xs mx-3 whitespace-nowrap font-normal text-gray-300 ${addclass}`}>{children}</p>
}