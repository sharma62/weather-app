import SearchBox from "./components/SearchBox";
import InfoBox from "./components/InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [info, setInfo] = useState({});

  const handleStateUpdate = (res) => {
    setInfo(res);
   };
  //  console.log(info.temp)

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 pt-2 justify-items-center ">
        <div className="">
          <SearchBox updateState={handleStateUpdate} />
        </div>
        <div className="col-span-2 ">
          <InfoBox title="Weather Info" weatherInfo= {info}/>
        </div>
      </div>
    </>
  );
}
