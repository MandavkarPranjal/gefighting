// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "~/components/ui/carousel";

// export default function AboutPage() {
//   return (
//     <div className="mx-auto my-10 max-w-[800px] text-center">
//       <Carousel className="h-[400px] w-full">
//         <CarouselContent>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/team.jpg"
//               alt="Image 1"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/ogs.avif"
//               alt="Image 2"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/rushi2.webp"
//               alt="Image 3"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/best.webp"
//               alt="Image 4"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/bgmi.jpg"
//               alt="Image 4"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//           <CarouselItem className="flex h-[400px] w-full items-center justify-center">
//             <img
//               src="/team2.jpg"
//               alt="Image 4"
//               className="h-full w-full rounded-md object-cover"
//             />
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>

//       <h2 className="mt-4 text-2xl font-bold">About GeFighting</h2>
//       <p className="text-lg">The Classic Global Esports Red & Blue</p>

//       <div className="info-img mt-6 flex w-full items-center gap-8">
//         {/* Left Image */}
//         <img
//           className="h-[400px] w-[500px] rounded-md"
//           src="/rossi.jpg"
//           alt="player"
//         />

//         {/* Right Text */}
//         <div className="flex flex-col">
//           <p className="text-2xl font-bold text-gray-900">
//             ESPORTS IS FUTURE !!
//           </p>
//           <p className="text-lg font-semibold text-gray-800">
//             Esports merges technology and sport, making competitive gaming
//             bigger than ever. With live viewership growing 90% yearly and game
//             sales surpassing music and movies, gaming unites people across
//             platforms—console, PC, mobile, and cloud. As gaming thrives, so does
//             competitive esports.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function AboutPage() {
  return (
    <div className="mx-auto my-10 max-w-[1100px] text-center text-white">
      <h1 className="text-neon-blue mb-6 text-5xl font-extrabold drop-shadow-lg">
        <span className="text-blue-600"> About </span>{" "}
        <span className="text-red-600">GeFighting</span>
      </h1>

      <Carousel className="border-neon-blue shadow-neon-blue/50 h-[450px] w-full rounded-lg border-4 shadow-xl">
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
              className="flex h-[450px] w-full items-center justify-center"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-neon-red" />
        <CarouselNext className="text-neon-red" />
      </Carousel>

      {/* Esports Info Section */}
      <div className="info-img mt-10 flex w-full items-center gap-8 rounded-lg bg-gradient-to-r from-black via-gray-900 to-black p-6 shadow-md shadow-red-600/50">
        <img
          className="h-[450px] w-[550px] rounded-lg border-4 border-red-400 shadow-lg shadow-red-600/50"
          src="/rossi.jpg"
          alt="player"
        />

        <div className="flex flex-col text-left">
          <p className="text-4xl font-extrabold text-red-500 drop-shadow-md">
            ESPORTS IS <span className="text-blue-600">THE FUTURE!! </span>
          </p>
          <p className="mt-4 text-lg font-medium leading-relaxed text-gray-300">
            Esports merges{" "}
            <span className="font-bold text-red-400">technology</span> and{" "}
            <span className="font-bold text-blue-400">sport</span>, making
            competitive gaming bigger than ever. Live viewership grows 90%
            yearly, and gaming sales surpass movies & music. Gaming unites
            players across platforms—console, PC, mobile, and cloud. The future
            belongs to esports!
          </p>
        </div>
      </div>

      {/* Esports Info Section */}
      <div className="info-img mt-10 flex w-full items-center gap-8 rounded-lg p-6 shadow-xl">
        {/* Left Text */}
        <div className="flex max-w-[50%] flex-col text-left">
          <p className="text-5xl font-extrabold tracking-wide text-black drop-shadow-md">
            <span className="text-blue-500"> WE</span> CREATE{" "}
            <span className="text-red-500">LEGENDS!! </span>
          </p>
          <p className="mt-4 text-lg font-medium leading-relaxed text-black">
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
          className="h-full w-[500px] rounded-lg shadow-lg shadow-blue-600/50"
          src="/udotan.jpg"
          alt="player"
        />
      </div>
    </div>
  );
}
