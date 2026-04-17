// import { motion } from "framer-motion";

// export default function Systems() {
//   const items = [
//     "Input Validation",
//     "RAG Pipelines",
//     "LLM Guardrails"
//   ];

//   return (
//     <section className="py-24 text-center">
//       <h2 className="text-4xl mb-10">AI System Design</h2>

//       <div className="flex justify-center gap-10">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.1 }}
//             className="p-6 border border-gray-700 rounded-xl"
//           >
//             {item}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import React from "react";

// export default function Systems() {
//   return (
//     <section className="py-20 px-6 max-w-5xl mx-auto text-center">
//       <h2 className="text-4xl mb-10">How I Build AI Systems</h2>

//       <div className="grid md:grid-cols-3 gap-10">

//         {[
//           {
//             title: "Input Processing",
//             desc: "Validation, prompt sanitization, and preprocessing for secure inputs."
//           },
//           {
//             title: "LLM + RAG",
//             desc: "Context retrieval using RAG pipelines with semantic search."
//           },
//           {
//             title: "Guardrails",
//             desc: "Toxicity filtering, jailbreak detection, and output validation."
//           }
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 border border-gray-800 rounded-xl"
//           >
//             <h3 className="text-xl mb-2">{item.title}</h3>
//             <p className="text-gray-400">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";

// export default function Systems() {
//   const systems = [
//     {
//       title: "Input Processing",
//       desc: "Sanitization, validation, and preprocessing of user inputs to prevent adversarial attacks."
//     },
//     {
//       title: "RAG Pipelines",
//       desc: "Semantic retrieval using vector databases and contextual enrichment for accurate LLM responses."
//     },
//     {
//       title: "LLM Layer",
//       desc: "Multi-model architecture using Azure, AWS, and self-hosted models optimized for performance."
//     },
//     {
//       title: "Guardrails",
//       desc: "Jailbreak detection, toxicity filtering, and prompt validation ensuring safe AI outputs."
//     }
//   ];

//   return (
//     <section className="py-20 px-6 max-w-6xl mx-auto text-center">
//       <h2 className="text-4xl mb-12">How I Build Systems</h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {systems.map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             className="p-6 rounded-xl bg-white/5 border border-gray-800"
//           >
//             <h3 className="text-xl mb-2">{item.title}</h3>
//             <p className="text-gray-400">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Systems() {
  const systems = [
    {
      title: "Backend & APIs",
      desc: "Built scalable backend services using FastAPI for handling LLM requests, orchestration, and real-time processing."
    },
    {
      title: "RAG & LLM Pipelines",
      desc: "Designed retrieval-augmented generation systems using vector databases for context-aware and accurate responses."
    },
    {
      title: "Deployment & Infrastructure",
      desc: "Containerized applications using Docker and deployed scalable systems on Azure Kubernetes Service (AKS)."
    },
    {
      title: "Database Layer",
      desc: "Designed structured storage using SQLAlchemy with PostgreSQL and SQLite for efficient data handling."
    },
    {
      title: "System Design",
      desc: "Architected end-to-end AI systems focusing on scalability, performance optimization, and reliability."
    },
    {
      title: "AI Guardrails",
      desc: "Implemented prompt validation, jailbreak detection, and toxicity filtering to ensure safe LLM outputs."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl mb-12">How I Build Systems</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {systems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white/5 border border-gray-800 hover:border-purple-500 transition transform hover:scale-105"
          >
            <h3 className="text-xl mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}