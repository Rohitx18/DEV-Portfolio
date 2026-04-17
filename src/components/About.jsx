// import React from "react";

// export default function About() {
//     return (
//       <section className="py-20 max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-4xl mb-8">What I Do</h2>
  
//         <p className="text-gray-400 text-lg leading-relaxed">
//           I design and deploy AI systems that operate at scale.
//           From LLM guardrails to RAG pipelines, my focus is on building
//           reliable, production-ready systems that solve real-world problems.
//         </p>
//       </section>
//     );
//   }


import React from "react";

export default function About() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl mb-8">About</h2>

      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        I’m a GenAI Engineer specializing in building scalable AI systems,
        focusing on LLM infrastructure, RAG pipelines, and production-ready architectures.
      </p>

      <p className="text-gray-400 text-lg leading-relaxed">
        At State Street, I developed AI-powered document extraction systems achieving
        <span className="text-white font-semibold"> 85%+ accuracy</span> and reducing manual effort by
        <span className="text-white font-semibold"> 50+ hours/week</span>.
        My work focuses on making AI systems reliable, secure, and scalable in real-world environments.
      </p>
    </section>
  );
}