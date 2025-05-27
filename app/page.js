import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center h-[42vh] bg-gray-900 space-y-2">
        <div className=" flex justify-center items-center ">
          <h1 className="font-bold text-3xl">Buy Me a Chai</h1>
          <img className="invert-25" width={88} src="tea.gif" alt="" />
        </div>
        <p>
          GetMeAChai is a crowdfunding platform that allows creators to fund their projects by offering rewards to backers.
        </p>
        <div className="flex flex-row gap-2">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-0.5 opacity-20 w-full"></div>

      <div className="text-white mx-auto container pb-16">
        <h2 className="text-2xl font-bold text-center my-4 mb-8">Your fans can buy you a chai..</h2>
        <div className="flex justify-around gap-16 items-center">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="man.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="coin.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="group.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-0.5 opacity-20 w-full"></div>

      <div className="text-white mx-auto container pb-16">
        <h2 className="text-2xl font-bold text-center my-4 mb-8">Your fans can buy you a chai..</h2>
        <div className="flex justify-around gap-16 items-center">
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="man.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="coin.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <img className="bg-slate-300 rounded-full p-2" width={90} src="group.gif" alt="" />
            <p className="font-bold">Fund yourself</p>
            <p className="max-w-[25vw]">
              Allows creators to fund their projects by offering rewards to backers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
