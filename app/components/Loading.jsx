import React from 'react'

function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[200px]">
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm">Loading...</p>
            </div>
        </div>
    )
}

export default Loading