import { CircleAlert, X } from 'lucide-react'
import React from 'react'

const Alert = ({message,onClose}) => {
  return (
    <div className="flex items-center justify-between text-red-600 max-w-90 w-full bg-white shadow h-10 rounded-md overflow-hidden">
            
            <div className="h-full w-1.5 bg-red-600"></div>

            <div className="flex items-center flex-1">
                <CircleAlert className="size-5 ml-3" />

                <p className="text-sm ml-2">
                    {message}
                </p>
            </div>

            <button
                type="button"
                aria-label="close"
                onClick={onClose}
                className="mr-3 active:scale-90 transition-all"
            >
                <X className="size-5 ml-2" />
            </button>

        </div>
  )
}

export default Alert
