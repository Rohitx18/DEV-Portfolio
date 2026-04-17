// import React from "react";
// export default function Experience() {
//     return (
//       <section id="experience" className="py-24 max-w-4xl mx-auto">
//         <h2 className="text-3xl mb-6">Experience</h2>
  
//         <p>State Street - GenAI Engineer</p>
//       </section>
//     );
//   }

// import React from "react";

// export default function Experience() {
//   return (
//     <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
//       <h2 className="text-4xl mb-10">Experience</h2>

//       <div className="mb-10">
//         <h3 className="text-2xl font-semibold">
//           State Street Corporation — Senior Associate, GenAI
//         </h3>
//         <p className="text-gray-400 mb-4">June 2024 – Present</p>

//         <ul className="space-y-2 text-gray-400">
//           <li>• Built AI document extraction platform with 85%+ accuracy</li>
//           <li>• Reduced manual processing by 50+ hours/week</li>
//           <li>• Designed multi-cloud LLM SDK (Azure, AWS, Databricks)</li>
//           <li>• Implemented guardrails (jailbreak detection, toxicity filtering)</li>
//           <li>• Deployed scalable systems using Docker & Kubernetes (AKS)</li>
//           <li>• Optimized inference using vLLM for performance gains</li>
//           <li>• Built evaluation pipelines for benchmarking LLMs</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="text-2xl font-semibold">
//           State Street Corporation — GenAI Intern
//         </h3>
//         <p className="text-gray-400 mb-4">Jan 2024 – June 2024</p>

//         <ul className="space-y-2 text-gray-400">
//           <li>• Built OCR-based data extraction pipelines</li>
//           <li>• Developed RAG pipelines for document understanding</li>
//           <li>• Improved data quality by 40% using ML models</li>
//           <li>• Built MFA modules for enterprise security</li>
//           <li>• Optimized prompt engineering for better LLM accuracy</li>
//         </ul>
//       </div>
//     </section>
//   );
// }


// import React, { useState } from "react";

// export default function Experience() {
//   const [active, setActive] = useState(0);

//   const data = [
//     {
//       role: "Senior Associate – GenAI",
//       company: "State Street Corporation",
//       date: "June 2024 – Present",
//       points: [
//         "Built AI document extraction platform with 85%+ accuracy",
//         "Reduced manual processing by 50+ hours/week",
//         "Designed multi-cloud LLM SDK (Azure, AWS, Databricks)",
//         "Implemented guardrails (jailbreak detection, toxicity filtering)",
//         "Deployed scalable systems using Docker & Kubernetes (AKS)"
//       ]
//     },
//     {
//       role: "GenAI Intern",
//       company: "State Street Corporation",
//       date: "Jan 2024 – June 2024",
//       points: [
//         "Built OCR-based data extraction pipelines",
//         "Developed RAG pipelines for document parsing",
//         "Improved data quality by 40%",
//         "Optimized prompt engineering strategies"
//       ]
//     },
//     {
//       role: "Data Analytics Intern",
//       company: "InternshipStudio",
//       date: "June 2022 – July 2022",
//       points: [
//         "Developed SQL skills for data cleaning and database setup",
//         "Used Python for data visualization",
//         "Created pivot tables in Excel for business insights",
//         "Completed sales data analysis project for retail chain"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
//       <h2 className="text-4xl mb-10">Experience</h2>

//       {/* Tabs */}
//       <div className="flex flex-wrap gap-3 mb-8 justify-center">
//         {data.map((item, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`px-4 py-2 rounded-full border text-sm transition ${
//               active === i
//                 ? "bg-white text-black"
//                 : "border-gray-700 text-gray-400"
//             }`}
//           >
//             {item.company}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
//         <h3 className="text-xl font-semibold">
//           {data[active].role}
//         </h3>

//         <p className="text-gray-400 mb-4">
//           {data[active].company} • {data[active].date}
//         </p>

//         <ul className="space-y-2 text-gray-400">
//           {data[active].points.map((p, i) => (
//             <li key={i}>• {p}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Associate – GenAI",
      company: "State Street Corporation",
      date: "June 2024 – Present",
      points: [
        "Built AI document extraction platform with 85%+ accuracy",
        "Reduced manual processing by 50+ hours/week",
        "Designed multi-cloud LLM SDK (Azure, AWS, Databricks)",
        "Implemented guardrails (jailbreak detection, toxicity filtering)",
        "Deployed scalable systems using Docker & Kubernetes (AKS)"
      ]
    },
    {
      role: "GenAI Intern",
      company: "State Street Corporation",
      date: "Jan 2024 – June 2024",
      points: [
        "Built OCR-based data extraction pipelines",
        "Developed RAG pipelines for document parsing",
        "Improved data quality by 40%",
        "Optimized prompt engineering strategies"
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "InternshipStudio",
      date: "June 2022 – July 2022",
      points: [
        "Developed SQL skills for database setup and data cleaning",
        "Used Python for data visualization and Excel for pivot tables",
        "Analyzed sales data to generate business insights"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl mb-12">Experience</h2>

      <div className="relative border-l border-gray-800 pl-6 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">

            {/* Timeline Dot */}
            <div className="absolute -left-3 top-2 w-3 h-3 bg-purple-500 rounded-full" />

            {/* Content */}
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">

              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {exp.company} • {exp.date}
              </p>

              <ul className="space-y-2 text-gray-400">
                {exp.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}