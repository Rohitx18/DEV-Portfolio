// import React from "react";
// export default function Contact() {
//     return (
//       <section id="contact" className="py-24 text-center">
//         <h2 className="text-3xl mb-4">Contact</h2>
  
//         <a
//           href="mailto:nrohit907@gmail.com"
//           className="px-6 py-3 bg-white text-black rounded-full"
//         >
//           Contact Me
//         </a>
//       </section>
//     );
//   }

// import React from "react";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-24 text-center px-6">
//       <h2 className="text-4xl mb-6">Contact</h2>

//       <p className="text-gray-400 mb-8">
//         Open to opportunities in AI, Backend, and GenAI Systems
//       </p>

//       <div className="space-y-3 text-lg">
//         <p>
//           📧 <a href="mailto:nrohit907@gmail.com" className="underline">nrohit907@gmail.com</a>
//         </p>

//         <p>
//           💼 <a href="https://www.linkedin.com/in/rohit-n-4b4a6014b/" target="_blank" className="underline">
//             LinkedIn
//           </a>
//         </p>

//         <p>
//           💻 <a href="https://github.com/Rohitx18" target="_blank" className="underline">
//             GitHub
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 flex justify-center px-6">
      <div className="bg-white/5 backdrop-blur border border-gray-800 rounded-2xl p-10 text-center max-w-md w-full">

        <h2 className="text-3xl mb-4">Let's Connect</h2>

        <p className="text-gray-400 mb-6">
          Open to opportunities in AI, Backend, and GenAI Systems
        </p>

        <div className="space-y-4 text-sm">

          <a
            href="mailto:nrohit907@gmail.com"
            className="block border border-gray-700 rounded-lg py-3 hover:bg-white hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-n-4b4a6014b/"
            target="_blank"
            className="block border border-gray-700 rounded-lg py-3 hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Rohitx18"
            target="_blank"
            className="block border border-gray-700 rounded-lg py-3 hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

        </div>
      </div>
    </section>
  );
}