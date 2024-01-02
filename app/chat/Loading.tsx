import React from 'react'

type Props = {}

function Loading({}: Props) {
  return (
    <>
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 w-48 mb-1"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 max-w-[360px] mb-1"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 mb-1"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 max-w-[330px] mb-1"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 max-w-[300px] mb-1"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
    {/* Loading */}
    {/* <span className="loading loading-dots loading-md text-warning ml-auto mr-auto"></span> */}
    </>
  )
}

export default Loading