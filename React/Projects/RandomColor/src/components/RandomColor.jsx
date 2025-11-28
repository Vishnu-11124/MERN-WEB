import React, { useState } from 'react'

const RandomColor = () => {
    const [colorType, setColorType] = useState('HEX')
    const [color, setColor] = useState('#b13e3e')

    const handleRandomColor = () => {
        if (colorType === 'HEX'){
            const hexColor = "#" + Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0");            
            setColor(hexColor)
        }
        else{
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)

            const rgbColor = `rgb(${r}, ${g}, ${b})`
            setColor(rgbColor)
        }
    }

    return (
        <div 
            style={{ backgroundColor: color }} 
            className="min-h-screen flex flex-col items-center justify-center text-white transition-all duration-300 p-6"
        >
            <h1 className="text-3xl font-bold mb-6 drop-shadow-lg">
                Random Color Generator
            </h1>

            <div className="bg-black/40 p-6 rounded-xl backdrop-blur-md shadow-lg space-y-4">
                <div className="flex gap-4 justify-center">
                    <button 
                        onClick={() => setColorType('HEX')}
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all"
                    >
                        HEX Color
                    </button>

                    <button 
                        onClick={handleRandomColor}
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all"
                    >
                        Generate Color
                    </button>

                    <button 
                        onClick={() => setColorType('RGB')}
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all"
                    >
                        RGB Color
                    </button>
                </div>

                <div className="text-center text-lg">
                    <span className="font-semibold">Color Type:</span> {colorType}
                </div>
            </div>

            <div className="mt-6 bg-black/30 px-4 py-2 rounded-lg backdrop-blur">
                <span className="font-semibold">Color:</span> {color}
            </div>
        </div>
    )
}

export default RandomColor
