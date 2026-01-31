

import { useEffect, useState } from "react"
import { SidebarToggle } from "./components/icons/sidebarToggle"


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};


//plan portfolio website
function App(){
  const [sidebarOpen,setSidebarOpen] = useState(true);//use context api instead

  const isDesktop = useMediaQuery("(min-width: 768px)");//true if width >= 768
  console.log(isDesktop)


  useEffect(()=>{
    if(!isDesktop){
      setSidebarOpen(false)
    }else{
      setSidebarOpen(true)
    }
  },[isDesktop])

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Content sidebarOpen={sidebarOpen}/>
    </div>
  )
}
function ListItem({title, icon, size}) {

    if(size == "sm"){
      return (
        <div className="hover:bg-slate-200 flex justify-between rounded-md cursor-pointer text-blue-500 p-2 m-4">
          <div>
            {icon}
          </div>
        </div>
      )
    }

      return  <div className="hover:bg-slate-200 flex justify-between px-10 py-4 m-2 cursor-pointer rounded-xl text-blue-500 ">
        <div>
            {title}
        </div>
        <div>
            {icon}
        </div>
    </div>
   
}
function Sidebar({sidebarOpen,setSidebarOpen}){

      const [open, setOpen] = useState(true);

    return <div>
        <div className="flex">
            <div className={`${open ? "w-72" : "w-16"} h-screen transition-all duration-300`}>
                <div className={`h-full bg-gray-50 ${open ? "p-4" : "p-2"}`}>
                    <button onClick={() => {
                        setOpen(e => !e)
                    }} className="hover:bg-gray-300 p-2 rounded-sm bg-gray-400">
                        Close
                    </button>
                  
                    <div>
                    <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Webinars"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Billing"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Setting"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

                        }/>
                    </div>
                </div>
            </div>

           
        </div>

    </div>
  
}
function Content({sidebarOpen}){
  return (
    <div className="w-full">
      <div className="bg-black h-48 hidden md:block"></div>
      <div className="grid grid-cols-12 gap-8 p-4">

        <div className="h-96 rounded-md shadow-lg hidden md:block md:col-span-3 bg-gray-200 -translate-y-16 font-thin">
          <img src="https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png" alt="profile image" className="w-30 p-4 "></img>
          <h1 className="flex justify-center font-bold text-slate-600">Prashant</h1>
          <p className="flex justify-center text-slate-500">lucy@gmail.com</p>
          <p className="flex justify-center text-slate-500">9999xxxx99</p>
          <p className="flex justify-center text-slate-500">Delhi,India</p>
        </div>
        <div className="h-96 rounded-md shadow-2xl col-span-12 md:col-span-6 bg-red-200">
          <div ></div>

        </div>
        <div className="h-96 rounded-md shadow-2xl col-span-12 md:col-span-3 bg-blue-300"></div>
      </div>
    </div>
  )
}
export default App