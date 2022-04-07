import React from 'react'
import Link from "next/link"

const Navlink = ({ urlLocation, title }) => {
    return (
        <React.Fragment>
            <Link href={urlLocation}>
                <a className="text-xs hover:text-white font-bold">{title}</a>
            </Link>
        </React.Fragment>
    )
}

export default Navlink