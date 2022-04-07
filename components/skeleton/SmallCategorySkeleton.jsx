import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { SmallText } from '../atoms/Text'

const SmallCategorySkeleton = () => {
    return (
        <React.Fragment>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className="bg-base-200 p-2 rounded-xl -mt-1 flex">
                    <div className={`rounded-lg w-2 -mt-1 md:mt-0 md:w-12 md:h-12`}><Skeleton width={48} height={48} /></div>
                    <div className="ml-2">
                        <h1 className="font-bold ml-10 md:ml-0 text-white text-sm md:text-lg"><Skeleton width={126} /></h1>
                        <SmallText addclass={'ml-10 md:ml-0 mt-1'}><Skeleton width={90} /></SmallText>
                    </div>
                </div>
            </SkeletonTheme>
        </React.Fragment>
    )
}

export default SmallCategorySkeleton