import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const NavlinkSkeleton = () => {
    return (
        <React.Fragment>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton width={100} height={25} />
            </SkeletonTheme>
        </React.Fragment>
    )
}

export default NavlinkSkeleton