// import { projects } from "../data/projects";
// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 max-w-6xl mx-auto">
//       <h2 className="text-4xl mb-12">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-10">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 border border-gray-800 rounded-xl"
//           >
//             <h3 className="text-xl">{p.title}</h3>
//             <p className="text-gray-400">{p.problem}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { projects } from "../data/projects";
// import React from "react";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl mb-16">Selected Work</h2>

//       <div className="grid md:grid-cols-2 gap-12">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-gray-800 hover:border-purple-500 transition transform hover:scale-105"
//           >
//             <h3 className="text-2xl mb-4">{p.title}</h3>

//             <p className="text-gray-400 mb-2">
//               <strong>Problem:</strong> {p.problem}
//             </p>

//             <p className="text-gray-400 mb-2">
//               <strong>Solution:</strong> {p.solution}
//             </p>

//             <p className="text-gray-400 mb-6">
//               <strong>Impact:</strong> {p.impact}
//             </p>

//             <a href={p.link} target="_blank" className="text-purple-400">
//               View Project →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl mb-16">Selected Work</h2>

//       <div className="grid md:grid-cols-2 gap-12">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ rotateX: 5, rotateY: -5 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
//           >
//             <h3 className="text-2xl mb-4">{p.title}</h3>

//             <p className="text-gray-400 mb-2">
//               <strong>Problem:</strong> {p.problem}
//             </p>
//             <p className="text-gray-400 mb-2">
//               <strong>Solution:</strong> {p.solution}
//             </p>
//             <p className="text-gray-400 mb-6">
//               <strong>Impact:</strong> {p.impact}
//             </p>

//             <a href={p.link} target="_blank" className="underline">
//               View Project →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { projects } from "../data/projects";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-gray-800 hover:border-purple-500 transition transform hover:scale-105"
          >
            <h3 className="text-2xl mb-2">{p.title}</h3>

            {/* ✅ NEW TECH STACK */}
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">
              {p.tech.join(" • ")}
            </div>

            <p className="text-gray-400 mb-2">
              <strong>Problem:</strong> {p.problem}
            </p>

            <p className="text-gray-400 mb-2">
              <strong>Solution:</strong> {p.solution}
            </p>

            <p className="text-gray-400 mb-6">
              <strong>Impact:</strong> {p.impact}
            </p>

            <a
              href={p.link}
              target="_blank"
              className="text-purple-400"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}