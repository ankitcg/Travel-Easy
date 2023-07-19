import React from "react";
import { useNavigate } from "react-router-dom";

const CarDetails = () => {
    const navigate = useNavigate();
    const clickHandle = ()=>{
        navigate('/addcars')
    }
  return (
    <div className="flex ">
      <div className="max-w-full mx-16 my-20 justify-between ">
        <h1 className="text-2xl font-semibold mx-4">Add Car Details</h1>
        <div className="flex justify-between ">
          <div className="flex  my-2 max-w-4xl border-r-2 ">
            <div className="my-4">
              <label className="w-52 h-10 mx-4 my-4">Car Name </label>
              <input className=" block mx-4 text-left w-96 my-4 bg-slate-200" type="text" placeholder="Name"/>
              <div className="flex">
                <div className="">
              <label className="mx-4">Type</label>
              <select className="block mx-4 w-32 bg-slate-200 my-4" >
                <option>SUV</option>
                <option>Sedan</option>
                <option>ALL</option>
              </select>
                </div>
                <div className="mx-8">
                <label className="mx-4">Model</label>
              <select className="block mx-4 w-32 bg-slate-200 my-4" >
                <option>4 Seater</option>
                <option>5 Seater</option>
                <option>8 Seater</option>
              </select>
                </div>
              </div>
              <div className="flex">
                <div className="">
              <label className="mx-4">Milage</label>
              <select className="block mx-4 w-32 bg-slate-200 my-4" >
                <option>15 Km/ltr</option>
                <option>19 Km/ltr</option>
                <option>22 Km/ltr</option>
              </select>
                </div>
              </div>
              <div className="flex">
                <div className="">
              <label className="mx-4">Available From</label>
              <input className="block mx-4 my-4 bg-slate-200 " type="date"/>
                </div>
                <div className="mx-8">
                <label className="">Available Till</label>
                <input className="block my-4  bg-slate-200 text-center" type="date"/>
                </div>
              </div>
              <div className="my-14">
                <h1 className="mx-4">Description</h1>
                <textarea className="bg-slate-200 mx-4 my-4" rows={8} cols={60}/>
              </div>
              <button className="bg-blue-500  h-8 w-28 rounded-3xl mx-10">Cancel</button>
            </div>
          </div>
          <div className="my-4 mx-8">
              <h1 className="w-60 my-4 ">Car Images</h1>
              <div className="flex">
              <input type="file"/>
              <div>{}</div>
              <button className="bg-blue-500 h-8 w-28 rounded-3xl mx-10">Add Image</button>
              </div>
              <div className="my-8">
                <h1>Car Details</h1>
                <textarea className="bg-slate-200 mx-4 my-4" rows={8} cols={60}/>
              </div>
              <div className="my-8">
                <h1>Details</h1>
                <textarea className="bg-slate-200 mx-4 my-4" rows={8} cols={60}/>
              </div>
              <button className="bg-blue-500 h-8 w-28 rounded-3xl mx-10" onClick={clickHandle}>Add</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
