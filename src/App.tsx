import { use, useEffect, useState } from "react";
import "./App.css"


type FileInfo = {
  id: number;
  name: string;
  path: string;
  absolutePath: string;
  size: string;
  type: "d" | "f",
  ext: string;
  modified: string; 
  md5:string;
};
function App() {

  const [fileinfos, setfileinfos] = useState<FileInfo[]>([])
  // 请求获取文件列表
    // useEffect(() => {
    //   fetch("/api/v1/files")
    //     .then((res) => res.json())
    //     .then((data) => setfileinfos(data))
    //     .catch((err) => console.error(err));
    // }, []);
  useEffect(() => {
    

    setfileinfos([
    {
      id: 1,
      name: "File 1",
      path: "/",
      absolutePath:"/a/b/c",
      size: "1MB",
      type: "d",
      ext: ".txt",
      modified: "2021-01-01",
      md5: "1234567890",
    },
    {
      id: 2,
      name: "File 1",
      path: "/",
      absolutePath:"/a/b/c",
      size: "1MB",
      type: "d",
      ext: ".txt",
      modified: "2021-01-01",
      md5: "1234567890",
    },
    {
      id: 3,
      name: "File 1",
      path: "/",
      absolutePath:"/a/b/c",
      size: "1MB",
      type: "d",
      ext: ".txt",
      modified: "2021-01-01",
      md5: "1234567890",
    }]);

      },[])
  // const fileInfos = [
  //   {
  //     id: 1,
  //     name: "File 1",
  //     size: "1MB",
  //     type: "d",
  //     ext: "",
  //     modified: "2021-01-01",
  //     url: "https://picsum.photos/200/300",
  //   },
  //    {
  //     id: 2,
  //     name: "File 1",
  //     size: "1MB",
  //     type: "f",
  //     ext: "txt",
  //     modified: "2021-01-01",
  //     url: "https://picsum.photos/200/300",
  //   },
  //    {
  //     id: 3,
  //     name: "File 1",
  //     size: "1MB",
  //     type: "f",
  //     ext: "pdf",
  //     modified: "2021-01-01",
  //     url: "https://picsum.photos/200/300",
  //   },
  // ]

  return (
    <div className="flex flex-col h-screen w-screen items-center gap-6 bg-gray-50 font-mono font-normal">
      <div className="flex flex-row h-20 w-9/10  justify-between items-center rounded-xl shadow-xl bg-base-100"> 
          <label className="flex flex-row h-full  w-fit gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
            <path fill="#fb7369" d="M91.974,39.775c-0.004-0.004-0.008-0.015-0.012-0.017C79.987,29.693,67.912,20.26,57.173,13.347	c-1.183-0.761-2.431-1.415-3.762-1.857c-0.02-0.007-0.04-0.013-0.06-0.02c-1.073-0.352-2.192-0.529-3.312-0.536v-0.003	c-0.013,0-0.026,0.001-0.039,0.002c-0.013,0-0.026-0.002-0.039-0.002v0.003c-1.12,0.008-2.239,0.185-3.312,0.536	c-0.02,0.007-0.04,0.013-0.06,0.02c-1.331,0.442-2.58,1.095-3.762,1.857C32.088,20.26,20.013,29.693,8.037,39.757	c-0.003,0.003-0.008,0.014-0.012,0.017c-1.803,1.483-2.466,3.788-1.454,5.491c1.144,1.924,3.987,2.344,6.35,0.939	c0.117-0.07,0.215-0.156,0.326-0.232c12.269,0.954,24.506,1.419,36.713,1.428v0.001c0.013,0,0.026,0,0.039,0s0.026,0,0.039,0v-0.001	c12.208-0.01,24.445-0.475,36.713-1.428c0.11,0.076,0.208,0.162,0.326,0.232c2.363,1.405,5.206,0.985,6.35-0.939	C94.441,43.563,93.777,41.257,91.974,39.775z"></path><path fill="#c9dcf4" d="M86.755,45.974l0.008-0.004c-13.426-7.7-25.521-15.401-35.778-21.726c-0.653-0.403-1.481-0.409-2.142-0.018	c-11.11,6.584-22.981,14.07-35.59,21.747c-0.002,0-0.004,0-0.006,0c-0.004,0.003-0.007,0.005-0.011,0.008	c0.865,11.972,2.129,23.603,3.643,34.818c0.803,4.868,4.069,8.202,8.8,8.202h48.641c4.731,0,7.774-3.539,8.8-8.202	c2.118-11.675,3.372-23.263,3.722-34.761C86.814,46.016,86.785,45.995,86.755,45.974z"></path><path fill="#4a254b" d="M50,74.104c3.655,0,6.664-2.76,7.06-6.309C57.108,67.357,56.803,67,56.362,67c-2.45,0-10.274,0-12.724,0	c-0.44,0-0.746,0.357-0.697,0.795C43.335,71.344,46.345,74.104,50,74.104z"></path><circle cx="32.927" cy="59.747" r="6.991" fill="#fff"></circle><circle cx="32.927" cy="59.747" r="3.178" fill="#4a254b"></circle><circle cx="67.073" cy="59.747" r="6.991" fill="#fff"></circle><circle cx="67.073" cy="59.747" r="3.178" fill="#4a254b"></circle><path fill="#fb7369" d="M81,33H69V20.691C69,19.205,70.205,18,71.691,18h6.617C79.795,18,81,19.205,81,20.691V33z"></path>
            </svg>
            
            <h1 className="font-bold font-mono">File Server</h1>
          </label>
          <label className="swap swap-rotate m-10">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
          </label>
      </div>
      
      <div className="flex flex-row h-fit w-9/10 p-3 justify-between items-center shadow-xl bg-base-100 rounded-xl"> 
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
             <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
          
          <div className="flex flex-row gap-2 w-full h-full  justify-end items-center">
            <button className="btn btn-success btn-md w-30 " onClick={()=>{
                  const model = document.getElementById('uploadid') as HTMLDialogElement
                  if (model){
                    model.showModal()
                  }
            }}>Upload</button>
              <dialog id="uploadid" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-center">Upload</h3>
                  {/* <p className="py-4">Press click button to select the file or close</p> */}
                  <div className="modal-action flex flex-col items-center">
                    <form method="dialog">
                      <label className="flex flex-row justify-center ">
                      <input type="file" className="file-input file-input-accent" />
                      <button className="btn btn-success">Submit</button>
                      </label>
                    </form>
                  </div>
                </div>
            </dialog>


            <button className="btn btn-info btn-md w-36" onClick={()=>
              {
                const model = document.getElementById('addid') as HTMLDialogElement
                if(model){
                  model.showModal();
                }}
              }>New Folder</button>
            <dialog id="addid" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                  <h3 className="font-bold text-lg text-center">New Folder</h3>
                  {/* <p className="py-4">Press click button to select the file or close</p> */}
                  <div className="modal-action flex flex-col items-center">
                    <form method="dialog" >
                      <label className="flex flex-row justify-center">
                          <input type="text" className="input input-success" placeholder="folder name" />
                          {/* <span className="badge badge-neutral badge-xs">Optional</span> */}
                          <button className="btn btn-success">Submit</button>
                        </label>
                        
                      {/* <label className=" ">
                      <input type="input" className="file-input file-input-accent" />
                        
                      </label> */}
                    </form>
                  </div>
                </div>
  
            </dialog>
          </div>


      </div>

      <div className="overflow-x-auto w-9/10 shadow-xl bg-base-100 rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center w-1"></th>
              <th >Name</th>
              <th className="text-center ">Size</th>
              <th className="text-center ">Type</th>
              <th className="text-center ">Modified</th>
              <th className="text-center ">Actions</th>
            </tr>
          </thead>
          <tbody>
                {fileinfos.map((fileInfo) => (
                    <tr className="hover:bg-base-300 hover:shadow-xl"> 
                    <td>{fileInfo.id}</td>
                    <th className="text-center w-fit">
                      <span className="flex flex-row gap-2 items-center">{
                      fileInfo.type === "d"? (
                        <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	                          viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                          <g>
                            <path d="M469.333,152.875v-40.533c0-26.645-21.696-48.341-48.341-48.341H261.035l-85.333-42.667H91.008
                              c-26.645,0-48.341,21.696-48.341,48.341v83.2C17.963,161.216,0,184.341,0,211.84v216.341c0,34.453,28.032,62.485,62.485,62.485
                              h387.029c34.453,0,62.485-28.032,62.485-62.485V211.84C512,184.341,494.037,161.216,469.333,152.875z M426.667,149.333H85.333
                              V69.675c0-3.115,2.539-5.675,5.675-5.675h74.624l85.312,42.667h170.048c3.136,0,5.675,2.56,5.675,5.675V149.333z"/>
                          </g>
                        </g>
                        </svg>
                    ):(
                   <svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0H2V16H14V7H7V0Z" fill="#000000"/>
                        <path d="M9 0V5H14L9 0Z" fill="#000000"/>
                        </svg>

                      )
                      }{fileInfo.name}</span></th>
                    
                    <td className="text-center">{fileInfo.size}</td>
                    <td className="text-center">{fileInfo.ext ==""? "-":fileInfo.ext.toUpperCase()}</td>
                    <td className="text-center">{fileInfo.modified}</td>
                    <td className="flex flex-row justify-center gap-3 ">
                      <button className="btn btn-success w-20">Download</button>
                      <button className="btn btn-warning w-20">Delete</button>
                    </td>
                  </tr>
                ))}
              
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default App
