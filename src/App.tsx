import { useState, useEffect } from "react";
import FPTLogo from "./assets/img/fpt.png";
import { TbChevronDown } from "react-icons/tb";
import CoverPhoto from "./assets/img/cover.jpg";
import EndingPicture from "./assets/img/end.png";

function App() {
  const regions = [
    "Ha Noi",
    "Ho Chi Minh",
    "Da Nang",
    "Can Tho",
    "Select Campus",
  ];

  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white w-full">
      {/* Header */}
      <div
        className={`fixed z-50 w-full ${hideHeader ? "top-[-48px]" : "top-0"}`}
      >
        <div
          className={`flex w-full h-12 bg-gray-950 text-white items-center transition-opacity ${
            hideHeader ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex space-x-6 ml-12">
            <div>Academic Portal</div>
            <div>Learning Management System</div>
            <div>Course Management System</div>
          </div>
        </div>

        {/* Navigation bar */}
        <div className=" bg-white flex w-full items-center">
          <div className="flex items-center ml-4 my-4">
            <img src={FPTLogo} alt="FPT Logo" />
            <div className="flex text-2xl font-thin text-indigo-500 ml-4">
              for campus
            </div>
          </div>
          <div className="flex space-x-6 ml-28 text-gray-600">
            {regions.map((region, index) => (
              <div className="flex items-center">
                <div key={index}>{region}</div>
                <TbChevronDown className="text-gray-400 ml-2" />
              </div>
            ))}
          </div>
          <div className="flex-grow" />
          <button className="px-3 py-2 bg-indigo-600 text-white mr-16 rounded font-medium">
            Contact
          </button>
        </div>
        {/* Navigation bar */}
      </div>
      {/* Header */}
      {/* Cover */}
      <div className="flex w-full h-full relative">
        <img className="flex" src={CoverPhoto} />
        <div className="absolute top-0 left-0 h-full w-2/5">
          <div className="flex flex-col bg-gray-900 bg-opacity-70 h-full rounded items-center justify-center  px-14">
            <div className="flex text-white font-bold text-[60px]">
              Strengthen Ben's ability to attract more money
            </div>
            <div className="flex w-full">
              <div className="flex text-white text-2xl pt-4">
                Equip Ben with the most in-demand skills and prepare him for job
                success
              </div>
            </div>
            <div className="flex w-full pt-12">
              <button className="flex mt-2 px-5 py-2 bg-indigo-600 text-white mr-16 rounded font-medium">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Cover */}
      {/* Infromation */}
      <div className="flex w-full px-12 pt-12">
        <div className="flex w-full px-8 bg-neutral-800 h-36 rounded-lg">
          <div className="flex w-full">
            <div className="flex w-1/3 py-7 text-white ml-12">
              <div className="flex w-fit  items-center font-bold text-2xl">
                69%
              </div>
              <div className="flex  border-r items-center ml-4 pr-12">
                Ben is 69% more likely to enroll in a degree program that offers
                industry micro-credentials
              </div>
            </div>
            <div className="flex w-1/3 py-7 text-white ml-12">
              <div className="flex w-fit  items-center font-bold text-2xl">
                86%
              </div>
              <div className="flex  border-r items-center ml-4 pr-12">
                of employers believe that Professional Certificates strengthen a
                candidate’s job application
              </div>
            </div>
            <div className="flex w-1/3 py-4 text-white ml-12">
              <div className="flex w-fit  items-center font-bold text-2xl">
                96%
              </div>
              <div className="flex ml-4 w-full items-center pr-12">
                of students agree that a Professional Certificate will help them
                secure a job
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Infromation */}
      <img className="pt-12" src={EndingPicture}></img>
    </div>
  );
}

export default App;
