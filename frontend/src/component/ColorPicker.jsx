import { Palette } from 'lucide-react';
import React, { useRef } from 'react';

const ColorPicker = ({ selectedColor, onChange }) => {
    const colorInputRef = useRef(null);

    return (
        <div className="relative flex justify-center">
            {/* Colors button */}
            <button
                onClick={() => colorInputRef.current?.click()}
                className="
                    flex items-center gap-2
                    text-sm text-purple-600
                    bg-purple-100
                    px-3 py-2 
                    rounded-lg hover:px-6 hover:ring transition-all ">
                <Palette size={16} />
                <span>Colors</span>
            </button>
            {/* Invisible color input */}
            <input
                ref={colorInputRef}
                type="color"
                value={selectedColor}
                onChange={(e) => {onChange(e.target.value)}}
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-12 h-12 opacity-0 cursor-pointer"/>
        </div>
    );
};

export default ColorPicker;