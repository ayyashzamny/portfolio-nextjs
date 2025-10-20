import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaReact, FaNodeJs ,FaLaravel} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql ,SiArduino} from "react-icons/si";

const projects = [
   {
    title: "book365.lk",
    description:
      `An innovative platform designed to unify sports‑facility bookings.\n\n• Real‑time slot booking across centers\n• Search nearby facilities when travelling\n• Transparent availability, timings, and fees\n• User‑friendly UI for seamless experience | The system is designed to: Help players easily book futsal courts Allow venue owners to manage bookings and availability Simplify the overall process for both sides`,
    stack: ["react", "express", "node", "mysql"],
    link: "https://book365.lk/",
  },
  {
    title: "Finance Management REST API",
    description:
      `A secure backend for tracking budgets, transactions, savings goals, and generating financial reports.\n\n• JWT authentication & role‑based access for admins and regular users\n• Expense / income endpoints with category support\n• Budget alerts when spending nears limits\n• Admin dashboard APIs for user management`,
    stack: ["express", "node", "mongodb"],
    link: "https://github.com/ayyashzamny/finance-management-system-rest-api.git",
  },
  {
    title: "MediX – Healthcare Management System",
    description:
      `Full‑stack app to streamline hospital operations.\n\n• Separate portals for admin, doctor, and employee roles\n• Leave‑request workflow and schedule management for staff\n• Patient appointment booking with real‑time doctor availability`,
    stack: ["react", "express", "node", "mysql"],
    link: "https://github.com/ayyashzamny/medi-x-csse.git",
  },
  {
    title: "Tailor Management System",
    description:
      `Online ordering platform for tailor shops.\n\n• Customers place and track custom garment orders\n• Shop owners manage orders, statuses, and measurements`,
    stack: ["react", "express", "node", "mongodb"],
    link: "https://github.com/ayyashzamny/MSR-ITP.git",
  },
  {
    title: "IoT System for Agricultural Monitoring",
    description:
      `End‑to‑end IoT solution for farms.\n\n• Sensor data collection for soil moisture and environment\n• Automated watering triggered by low‑moisture thresholds\n• SMS alerts to farmers for critical conditions`,
    stack: ["react", "express", "node", "mysql", "arduino"],
    link: "", // private repo
  },
  {
    title: "Country Explorer",
    description:
      `A modern frontend application where users can explore detailed information about countries worldwide.\n\n• Interactive explorer using live data from the REST Countries API\n• User authentication powered by Clerk\n• Fun geography quiz game\n• Fully responsive and engaging UI`,
    stack: ["react", "javascript"],
    link: "https://sa-countries.vercel.app/",
  },
  {
    title: "RideAwake (Mobile)",
    description:
      `Android app that stops you from missing your stop and keeps loved ones informed.\n\n• Smart Stop Alert: notifies 1 km before destination\n• Live Weather for destination\n• Safety SMS with live location to guardian\n• Arrival Ping once you arrive safely`,
    stack: ["react", "javascript"],
    link: "", // mobile app store link pending
  },
  {
    title: "Food Delivery Application (Microservices)",
    description:
      `A food delivery platform built on microservices.\n\n• Role‑based authentication (customer / driver)\n• Password recovery via NodeMailer\n• Profile management and deactivation\n• Orders auto‑assigned to nearby drivers`,
    stack: ["flutter", "node", "mongodb"],
    link: "", // private
  },
  {
    title: "Smart Business Card Scanner & CRM (Internship)",
    description:
      `Productivity tool for sales teams.\n\n• Card scanning with Azure OCR – auto extracts Name, Phone, Email\n• Enriched contacts with tagging, notes, reminders\n• Pipeline tracker & reports – visualize deal stages`,
    stack: ["react", "node", "mssql"],
    link: "", // internal
  },
  {
    title: "Admin Panel for Mobile Application Management (Internship)",
    description:
      `Internal admin panel to control mobile‑app users & features.\n\n• Assign permissions, send notifications, view feedback\n• Managers get stats dashboards & reports\n• Singleton admin user with elevated privileges`,
    stack: ["react", "node", "mssql"],
    link: "", // internal
  },
];

const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJs />,
  php: <FaPhp />,
  java: <FaJava />,
  react: <FaReact />,
  node: <FaNodeJs />,
  mongodb: <SiMongodb />,
  express: <SiExpress />,
  mysql: <SiMysql />,
  // Text for technologies without icons:
  arduino: <SiArduino />,
  laravel: <FaLaravel />,
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg transition hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex space-x-4 mb-2 text-white">
              {project.stack.map((tech, idx) => (
                <div key={idx} className="text-xl">
                  {techIcons[tech] ? techIcons[tech] : tech} {/* Use icons or text */}
                </div>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="mr-2" /> View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
