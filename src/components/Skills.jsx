import React from "react";

export default function Skills() {
  const skills = [
    "Python", "C++", "HTML", "CSS",
    "LangChain", "LlamaIndex", "FastAPI", "Transformers",
    "PyTorch", "Hugging Face", "RAG", "ChromaDB",
    "Docker", "Kubernetes", "Azure", "Tableau",
    "SQL", "SQLite", "Excel"
  ];

  return (
    <section className="py-20 px-6 text-center max-w-5xl mx-auto">
      <h2 className="text-4xl mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}