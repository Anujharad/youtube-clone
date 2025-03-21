import { Videocard } from "./videocard"

 const video =[
    {     title: "sharktank eps01| Aman",
      channel:"Set india", 
      view : "336k views | 1 months ago",
      logo:"channel1.jpg",
      thumbnail:"video1.png",
    },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      },{     title: "sharktank eps01| Aman",
        channel:"Set india", 
        view : "336k views | 1 months ago",
        logo:"channel1.jpg",
        thumbnail:"video1.png",
      }
    
       ]

       export const Videogrid = ()=>{return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
       
        {video.map((x)=> <div><Videocard 
        title={x.title}
        channel={x.channel}
        view={x.view}
        logo={x.logo}
        thumbnail={x.thumbnail}
        
        
        
        ></Videocard></div>)}
        </div>}
