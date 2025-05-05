import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import CardComp from "./CardComp";
import { BackgroundBeamsDemo } from "./components/elements/BeamsBackground";
import axios from "axios";
import ProjectDescription from "./ProjectDescription";

type Project = {
    project_pdf_description: string;
    project_title: string;
    team_members: Array<string>;
    tech_stack: Array<string>;
    year_done: number;
};

function SearchProject(){
    const [searchValue, setSearch] = useState("");
    const [view, setView] = useState(false); 
    const handleKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if( e.key === "Enter" ){
             console.log(searchValue);
             setSearch("");
        }
    }

    const [data, setData] = useState<Project[]>([]);
    const [id,setId] = useState<number>(0);

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/projects/all').then((res)=>{setData(res.data)}).catch((error)=>{console.log(error)});
    },[])

    return(
        <>
        <div className="h-screen w-screen  z-0">
         <BackgroundBeamsDemo>
           <div className="h-screen w-screen  flex flex-col ">
            <div className=" w-screen h-[20%]  flex items-center justify-center border-1 border-white">
                <div className="relative h-[50%] w-[80%]">
                    <input value={searchValue} onKeyDown={handleKey} onChange={(e)=>{setSearch(e.target.value)}} className="pl-10 h-full w-full  bg-transparent  opacity-100  border-2 border-white rounded-full text-[20px] p-3 text-white" type="text" placeholder="Search" >
                    </input>
                    <button onClick={()=>{console.log(searchValue);setSearch("")}}> <Search className="absolute right-3 top-1/2 transform -translate-x-4 -translate-y-1/2 text-white " /></button>
                </div>
            </div> 
            
            <div className="h-[80%] w-screen flex flex-wrap justify-center gap-6 overflow-y-auto p-4">
             {data.map((item, index) => (
                <CardComp key={index} idx={index} {...item} setView={setView} setId={setId} />
             ))}
            </div>
        </div>
        </BackgroundBeamsDemo>
        </div>
        
        {view && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
           
            {/* <div className="bg-white text-black p-8 rounded-xl">
              <button onClick={() => setView(false)}>Close</button>
              <div>Project Details...</div>
            </div> */}
            <ProjectDescription id={id} data={data} setView={setView} />
          </div>
        )}
        </>
    )
}
export default SearchProject;