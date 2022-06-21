import React from 'react'

const List = (props) => {
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-screen-xl mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                    {props.movie?.title}
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm leading-5 font-medium text-gray-900">
                                {props.movie?.release_date}
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-500">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm leading-5 font-medium text-gray-900">
                                {props.movie?.vote_average}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6">
                <p className="text-sm leading-5 font-medium text-gray-900">
                    {props.movie?.overview}
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default List