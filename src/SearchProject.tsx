import { Search } from "lucide-react";
import { useState } from "react";
import { BentoGridDemo } from "./components/ui/BentoGridComponent";

function SearchProject(){
    const [searchValue, setSearch] = useState("");
    const handleKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if( e.key === "Enter" ){
             console.log(searchValue);
             setSearch("");
             
        }
    }
    return(
        <>
        <div className="h-screen w-screen bg-black flex flex-col">
            <div className=" w-screen h-[20%]  flex items-center justify-center">
                <div className="relative h-[50%] w-[80%]">
                    <input value={searchValue} onKeyDown={handleKey} onChange={(e)=>{setSearch(e.target.value)}} className="pl-10 h-full w-full  bg-gray-800 rounded-full text-[20px] p-3 text-white" type="text" placeholder="Search" >
                    </input>
                    <button onClick={()=>{console.log(searchValue);setSearch("")}}> <Search className="absolute right-3 top-1/2 transform -translate-x-4 -translate-y-1/2 text-gray-400" /></button>
                </div>

                
            </div> 

            <BentoGridDemo open={false}  /> 

            

        </div>
        </>
    )
}
export default SearchProject;