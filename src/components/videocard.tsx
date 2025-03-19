export function Videocard(props: any){
    return <div>
      <img src ={props.thumbnail} className="rounded-xl p-3 cursor-pointer"></img>
       <div className="grid grid-cols-12">
          <div className="col-span-1">
            <img  className=" rounded-full w-12 h-12 pt-1 " src={props.logo}></img>
          </div>
          <div className="col-span-11 pl-5 ">
           <div >{props.title} </div>
           <div className ="text-gray-600 ">{props.channel}</div>
           <div className ="text-gray-600">{props.view}</div>  
          </div>
         
        </div>


    </div>    
}
























































