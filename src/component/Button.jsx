import React from 'react'

function Button({children}) {
    return (
        <button className="bg-green-500 text-white font-semibold rounded-lg shadow-lg px-6 py-3 transition-transform transform hover:scale-105 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 m-2">
            {children}
        </button>

    )
}

export default Button