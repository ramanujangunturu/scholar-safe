import './Search.css';
import { useState } from 'react';
import { Input } from '../ui/input';
import { TextGenerateEffect } from "../ui/text-generate-effect";

function Search() {
    const [animate, setAnimate] = useState(false);
    const words = `WELCOME TO SCHOLAR SAFE`;

    const handleFocus = () => {
        setAnimate(true);
    };

    return (
        <div className="w-full bg-black flex flex-col items-center border-2px border-green-500">
            <div className="h-[50%] w-[80%] border-2px border-red-500">
                <div className={`h-[30%] border-2px border-white flex justify-center ${animate ? 'animate-fadein' : ''}`}>
                    <TextGenerateEffect words={words} />
                </div>
                <div className="h-[30%] border-2px  border-blue-700 mt-[2%]">
                    <Input type="search" onFocus={handleFocus} />
                </div>
            </div>
        </div>
    );
}

export default Search;