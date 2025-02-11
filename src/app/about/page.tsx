
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "~/components/ui/carousel";

// export default function AboutPage() {
//   return (
//     <div className="mx-auto my-10 max-w-[1100px] text-center text-white">
//       <h1 className="text-neon-blue mb-6 text-5xl font-extrabold drop-shadow-lg">
//         <span className="text-blue-600"> About </span>{" "}
//         <span className="text-red-600">GeFighting</span>
//       </h1>

//       <Carousel className="relative h-[450px] w-full rounded-lg ]">
//   <CarouselContent>
//     {[
//       "/team.jpg",
//       "/ogs.avif",
//       "/rushi2.webp",
//       "/best.webp",
//       "/bgmi.jpg",
//       "/team2.jpg",
//     ].map((src, index) => (
//       <CarouselItem
//         key={index}
//         className="flex h-[450px] w-full items-center justify-center transition-transform duration-500 ease-in-out"
//       >
//         <img
//           src={src}
//           alt={`Image ${index + 1}`}
//           className="h-full w-full rounded-lg object-cover"
//         />
//       </CarouselItem>
//     ))}
//   </CarouselContent>

//   {/* Enhanced Arrows */}
//   <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-red-500" />
//   <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-red-500" />
// </Carousel>


//       {/* Esports Info Section */}
//       <div className="info-img mt-10 flex w-full items-center gap-8 rounded-lg bg-gradient-to-r from-black via-gray-900 to-black p-6 shadow-md shadow-red-600/50">
//         <img
//           className="h-[450px] w-[550px] rounded-lg border-4 border-red-400 shadow-lg shadow-red-600/50"
//           src="/rossi.jpg"
//           alt="player"
//         />

//         <div className="flex flex-col text-left">
//           <p className="text-4xl font-extrabold text-red-500 drop-shadow-md">
//             ESPORTS IS <span className="text-blue-600">THE FUTURE!! </span>
//           </p>
//           <p className="mt-4 text-lg font-medium leading-relaxed text-gray-300">
//             Esports merges{" "}
//             <span className="font-bold text-red-400">technology</span> and{" "}
//             <span className="font-bold text-blue-400">sport</span>, making
//             competitive gaming bigger than ever. Live viewership grows 90%
//             yearly, and gaming sales surpass movies & music. Gaming unites
//             players across platforms—console, PC, mobile, and cloud. The future
//             belongs to esports!
//           </p>
//         </div>
//       </div>

//       {/* Esports Info Section */}
//       <div className="info-img mt-10 flex w-full items-center gap-8 rounded-lg p-6 shadow-xl">
//         {/* Left Text */}
//         <div className="flex max-w-[50%] flex-col text-left">
//           <p className="text-5xl font-extrabold tracking-wide text-black drop-shadow-md">
//             <span className="text-blue-500"> WE</span> CREATE{" "}
//             <span className="text-red-500">LEGENDS!! </span>
//           </p>
//           <p className="mt-4 text-lg font-medium leading-relaxed text-black">
//             Global Esports has{" "}
//             <span className="font-bold text-red-400">scouted</span> and
//             <span className="font-bold text-blue-400"> developed</span> many of
//             the pros who are now recognized among history’s greatest esports
//             players. We’re constantly{" "}
//             <span className="font-bold text-red-500">advancing</span> our
//             abilities to find and build the{" "}
//             <span className="font-bold text-blue-500">legends of tomorrow</span>
//             .
//           </p>
//         </div>

//         {/* Right Image */}
//         <img
//           className="h-full w-[500px] rounded-lg shadow-lg shadow-blue-600/50"
//           src="/udotan.jpg"
//           alt="player"
//         />
//       </div>
//     </div>
//   );
// }

//----------------------------------------------------------------------

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "~/components/ui/carousel";
  
  export default function AboutPage() {
    return (
      <div className="mx-auto my-10 max-w-[1100px] px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-extrabold drop-shadow-lg md:text-5xl">
          <span className="text-blue-600"> About </span>{" "}
          <span className="text-red-600">GeFighting</span>
        </h1>
  
        {/* Carousel Section */}
        <Carousel className="relative h-[300px] w-full rounded-lg sm:h-[400px] md:h-[450px]">
          <CarouselContent>
            {[
              "/team.jpg",
              "/ogs.avif",
              "/rushi2.webp",
              "/best.webp",
              "/bgmi.jpg",
              "/team2.jpg",
            ].map((src, index) => (
              <CarouselItem
                key={index}
                className="flex h-[300px] w-full items-center justify-center transition-transform duration-500 ease-in-out sm:h-[400px] md:h-[450px]"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
  
          {/* Enhanced Arrows */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white text-2xl shadow-lg transition-transform hover:scale-110 hover:shadow-red-500 sm:text-3xl md:left-4 md:text-4xl" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white text-2xl shadow-lg transition-transform hover:scale-110 hover:shadow-red-500 sm:text-3xl md:right-4 md:text-4xl" />
        </Carousel>
  
        {/* Esports Info Section */}
        <div className="info-img mt-10 flex flex-col items-center gap-6 rounded-lg bg-gradient-to-r from-black via-gray-900 to-black p-6 shadow-md shadow-red-600/50 md:flex-row">
          <img
            className="h-[300px] w-full rounded-lg border-4 border-red-400 shadow-lg shadow-red-600/50 sm:h-[400px] md:h-[450px] md:w-[550px]"
            src="/rossi.jpg"
            alt="player"
          />
  
          <div className="flex flex-col text-left">
            <p className="text-3xl font-extrabold text-red-500 drop-shadow-md sm:text-4xl">
              ESPORTS IS <span className="text-blue-600">THE FUTURE!! </span>
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-gray-300 sm:text-lg">
              Esports merges{" "}
              <span className="font-bold text-red-400">technology</span> and{" "}
              <span className="font-bold text-blue-400">sport</span>, making
              competitive gaming bigger than ever. Live viewership grows 90%
              yearly, and gaming sales surpass movies & music. The future belongs
              to esports!
            </p>
          </div>
        </div>
  
        {/* Legends Section */}
        <div className="info-img mt-10 flex flex-col-reverse items-center gap-6 rounded-lg p-6 shadow-xl md:flex-row">
          {/* Left Text */}
          <div className="flex w-full flex-col text-left md:max-w-[50%]">
            <p className="text-3xl font-extrabold tracking-wide text-black drop-shadow-md sm:text-5xl">
              <span className="text-blue-500"> WE</span> CREATE{" "}
              <span className="text-red-500">LEGENDS!! </span>
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-black sm:text-lg">
              Global Esports has{" "}
              <span className="font-bold text-red-400">scouted</span> and
              <span className="font-bold text-blue-400"> developed</span> many of
              the pros who are now recognized among history’s greatest esports
              players. We’re constantly{" "}
              <span className="font-bold text-red-500">advancing</span> our
              abilities to find and build the{" "}
              <span className="font-bold text-blue-500">legends of tomorrow</span>
              .
            </p>
          </div>
  
          {/* Right Image */}
          <img
            className="h-[300px] w-full rounded-lg shadow-lg shadow-blue-600/50 sm:h-[400px] md:h-[450px] md:w-[500px]"
            src="/udotan.jpg"
            alt="player"
          />
        </div>
      </div>
    );
  }
  
