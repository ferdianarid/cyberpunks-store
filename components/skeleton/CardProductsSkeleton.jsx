import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const CardProductsSkeleton = () => {
    return (
        <React.Fragment>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className="card w-full bg-base-200 shadow-xl">
                    <div className='p-3 -mt-1'><Skeleton borderRadius={12} height={165} /></div>
                    <div className="px-3 pt-1 space-y-1 pb-3">
                        <h2 className="font-bold text-md"><Skeleton /></h2>
                        <p className='font-normal text-sm'><Skeleton /></p>
                        <div className="card-actions justify-between items-center">
                            <Skeleton width={122} />
                            <div className="-mt-1"><Skeleton width={120} /></div>
                        </div>
                        <div className="-mt-1 w-full pb-0"><Skeleton height={36} /></div>
                    </div>
                </div>
            </SkeletonTheme>
        </React.Fragment>
    )
}

export default CardProductsSkeleton