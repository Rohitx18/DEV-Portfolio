// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center relative">

//       <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

//       <div className="text-center z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-6xl md:text-8xl font-bold"
//         >
//           AI Systems That Scale
//         </motion.h1>

//         <p className="mt-6 text-gray-400">
//           GenAI Engineer building production-grade LLM systems
//         </p>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import React from "react";

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

//       <div className="text-center z-10 px-6">

//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-8xl font-bold leading-tight"
//         >
//           AI Systems <br /> That Scale
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-6 text-gray-400 max-w-xl mx-auto"
//         >
//           Building LLM infrastructure, RAG pipelines, and production AI systems.
//         </motion.p>

//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full">
//             Explore Work
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen flex items-center justify-center relative">

//       <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

//       <div className="text-center z-10 px-6">

//         {/* Profile Image */}
//         <img
//           src="/profile.jpeg"
//           alt="Rohit"
//           className="w-28 h-28 rounded-full mx-auto mb-6 border border-gray-700"
//         />

//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-7xl font-bold"
//         >
//           AI Systems That Scale
//         </motion.h1>

//         <p className="mt-6 text-gray-400">
//           GenAI Engineer building production-grade LLM systems
//         </p>

//         {/* Resume Button */}
//         <a
//           href="/resume.pdf"
//           download
//           className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full"
//         >
//           ⬇ Download Resume
//         </a>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full top-[-200px] left-[-200px]" />

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* LEFT */}
        <div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold leading-snug"
        >
          Hi, I'm Rohit. Nice to meet you.
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          I'm a GenAI Engineer focused on building scalable AI systems,
          including LLM guardrails, RAG pipelines, and production-ready architectures.
          Blending engineering and AI, I design systems that are reliable, secure, and efficient.
        </p>
          
          {/* <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            I build <br />
            <span className="text-purple-400">AI systems</span> <br />
            that scale.
          </motion.h1>

          <p className="mt-6 text-gray-400 text-lg">
            GenAI Engineer @ State Street building production-grade
            LLM systems, RAG pipelines, and AI infrastructure.
          </p> */}

          <div className="mt-8 flex gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-purple-500 rounded-full transition transform hover:scale-105"
              >
              ⬇️ Download Resume
            </a>

            <a
              href="https://github.com/Rohitx18"
              target="_blank"
              className="px-6 py-3 border border-gray-600 rounded-full"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            className="rounded-2xl border border-gray-700 shadow-2xl transition transform hover:scale-105"
            />
        </motion.div>
      </div>
    </section>
  );
}