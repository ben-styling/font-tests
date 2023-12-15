import { useState } from "react";
import {
  LiaClock,
  LiaDogSolid,
  LiaCatSolid,
  LiaFrogSolid,
} from "react-icons/lia";

function App() {
  const [useHeinemann, setUseHeinemann] = useState(false);

  return (
    <>
      <div className={useHeinemann ? `useHeinemann` : ``}>
        <div className="flex items-center justify-center w-full bg-gray-200 py-2">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="mr-3 text-gray-700 font-medium">
              {useHeinemann ? "Disable" : "Enable"} Heinemann everywhere
            </div>
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                checked={useHeinemann}
                onChange={() => setUseHeinemann((o) => !o)}
              />
              <div
                className={`block w-14 h-8 rounded-full ${
                  useHeinemann ? "bg-green-600" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`dot absolute top-1 bg-white w-6 h-6 rounded-full transition-all ease-out ${
                  useHeinemann ? "left-7" : "left-1"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
      <header className="z-50 sticky top-0 bg-white flex gap-2 self-stretch border-b-[#D8D8D8] px-6 py-2 border-b border-solid mb-5">
        <img
          className="h-[40px] m-auto"
          src="https://www.haven.com/assets/logos/haven_logo_colour.svg"
        />
      </header>

      <div className={`px-6` + ` ` + (useHeinemann ? `font-heading` : "")}>
        <h1 className="font-black pb-5 font-heading text-[32px] leading-[44px]">
          Title running over multiple lines
        </h1>
        <p className="pb-7">
          <strong>Devon Cliffs</strong> delightfully sits on the county&apos;s
          south coast in an area known as{" "}
          <a className="" href="#">
            Sandy Bay
          </a>
          , a beautiful spot that does exactly what it says on the tin.
        </p>

        <a className="flex justify-center items-center self-stretch rounded px-6 py-3 bg-havenBlue text-white mb-7 font-black">
          Book now
        </a>

        <h2 className="font-black pb-5 font-heading text-[24px] leading-[32px]">
          Title running over multiple lines
        </h2>
        <p className="pb-2">
          The biggest park in the Haven family, there’s acres of fun for all the
          family here, and an award-winning beach is just a stone’s throw away.{" "}
        </p>

        <p className="pb-5">
          An unrivalled range of activities are yours to try, from an Aerial
          Adventure like no other to bouncy bungee trampolines.
        </p>

        <figure>
          <img className="rounded" src="https://placehold.co/1600x900" />
          <figCaption className="pt-2 text-sm leading-[1.6]">
            An unrivalled range of activities are yours to try, from an{" "}
            <a className="font-black" href="#">
              Aerial Adventure
            </a>{" "}
            like no other to bouncy bungee trampolines.
          </figCaption>
        </figure>

        <div className="bg-midnightBlue-75 py-5 px-6 mt-5 text-white rounded-lg">
          <h2 className="font-black font-heading pb-2 text-[20px] leading-[28px]">
            Another heading
          </h2>
          <p>
            Devon Cliffs delightfully sits on the county’s south coast in an
            area known as Sandy Bay, a beautiful spot that does exactly what it
            says on the tin.
          </p>
        </div>

        <h2 className="pt-7 pb-2 leading-[24px] font-black text-[16px] font-heading">
          Title running over multiple lines
        </h2>
        <p>
          The biggest park in the Haven family, there’s acres of fun for all the
          family here, and an award-winning beach is just a stone’s throw away.{" "}
        </p>

        <ul className="text-midnightBlue-75 py-4">
          <li className="flex gap-2 items-center pb-2.5">
            <LiaDogSolid className="flex-shrink-0 w-6 h-6" />
            Dogs
          </li>
          <li className="flex gap-2 items-center pb-2.5">
            <LiaCatSolid className="flex-shrink-0 w-6 h-6" />
            Cats
          </li>
          <li className="flex gap-2 items-center pb-2.5">
            <LiaFrogSolid className="flex-shrink-0 w-6 h-6" />
            Frogs
          </li>
        </ul>

        <a
          className="font-black flex justify-center items-center gap-1 rounded border-havenBlue px-4 py-2.5 border-2 border-solid text-havenBlue"
          href="#"
        >
          Find out more
        </a>

        <h2 className="pt-7 font-black pb-5 font-heading text-[24px] leading-[32px]">
          Title running over multiple lines
        </h2>

        <div className="rounded-lg overflow-hidden relative mb-6">
          <img src="https://placehold.co/1600x900" />
          <div className="pt-3 pb-4 px-4">
            <h2 className="self-stretch text-midnightBlue text-[24px] font-black leading-[32px] font-heading pb-1">
              The Jump
            </h2>
            <div className="font-black pb-3">£8 per person</div>
            <div className="text-midnightBlue-75">
              Thrill-seeking&nbsp;&nbsp;|&nbsp;&nbsp;0-0 years
            </div>
            <div className="text-midnightBlue-75 pt-2">Outdoor</div>
            <div className="pt-4 flex gap-2 text-midnightBlue-75 items-center">
              <LiaClock className="shrink-0 w-6 h-6" />
              30 mins duration
            </div>
          </div>

          <div className="absolute rounded-lg inset-0 border-opacity-90 border-midnightBlue-75 border-4"></div>
          <div className="absolute top-[2px] left-0 right-0 py-1 font-bold width-full text-center text-white bg-midnightBlue-75 bg-opacity-90">
            Recommended
          </div>
        </div>

        <div className="rounded-lg overflow-hidden relative mb-6 shadow-lg">
          <img src="https://placehold.co/1600x900" />
          <div className="py-3 px-4">
            <h2 className="self-stretch text-midnightBlue text-[24px] font-black leading-[32px] font-heading pb-1">
              The Jump
            </h2>
            <div
              className={`text-xs uppercase bg-[#FFBB13] font-bold rounded-sm px-1 w-[max-content] ${
                useHeinemann ? "pt-[3px]" : ""
              }`}
            >
              Limited availability
            </div>
            <div className="font-black pb-3 pt-1">£8 per person</div>
            <div className="text-midnightBlue-75">
              Thrill-seeking&nbsp;&nbsp;|&nbsp;&nbsp;0-0 years
            </div>
            <div className="text-midnightBlue-75 pt-2">Outdoor</div>
            <div className="pt-4 flex gap-2 text-midnightBlue-75 items-center">
              <LiaClock className="shrink-0 w-6 h-6" />
              30 mins duration
            </div>
          </div>
        </div>
      </div>
      <div className="bg-midnightBlue h-96 mt-8"></div>
    </>
  );
}

export default App;
