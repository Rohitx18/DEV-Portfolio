// import React from "react";

// export default function Education() {
//   return (
//     <section className="py-20 max-w-5xl mx-auto px-6">
//       <h2 className="text-4xl mb-8">Education</h2>

//       <div className="border border-gray-800 rounded-xl p-6 bg-white/5">
//         <h3 className="text-xl font-semibold">
//           Bachelor of Technology (B.Tech)
//         </h3>

//         <p className="text-gray-400 mt-2">
//           Computer Science / Related Field
//         </p>

//         <p className="text-gray-500 mt-2">
//           2020 - 2024
//         </p>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Education() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl mb-8">Education</h2>

      <div className="space-y-6">

        <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            SRM Institute of Science and Technology 
          </h3>
          <h2>
          Bachelor of Technology (B.Tech)
          </h2>
          <p className="text-gray-400 mt-2">2020 - 2024</p>
          <p className="text-gray-500">CGPA: 9.17%</p>
        </div>

        <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold">
            MP & EV English Medium School
          </h3>
          <p className="text-gray-400">2017 - 2019</p>
          <p className="text-gray-500">Percentage: 76%</p>
        </div>

        <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold">
            MP & EV English Medium School
          </h3>
          <p className="text-gray-400">2016</p>
          <p className="text-gray-500">CGPA: 8.8</p>
        </div>

      </div>
    </section>
  );
}