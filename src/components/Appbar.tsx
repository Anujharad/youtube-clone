import { SearchBar } from "./Searchbar"

export const Appbar=()=> {return <div className="flex justify-between pt-1 p-3 " >
<div className="text-md inline-flex items-center  ">youtube</div>
<div><SearchBar /></div>
<div className="text-md inline-flex items-center  ">Sign in</div>

</div>
}