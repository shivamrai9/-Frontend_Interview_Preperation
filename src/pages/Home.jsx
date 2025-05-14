import { Link } from "react-router-dom";

const challenges = [
  {
    name: "Tabs Form",
    path: "/tabs-form",
    description: "A multi-step form with tabbed navigation",
  },
  {
    name: "Otp Input",
    path: "/otp-input",
    description: "Enter and auto-focus OTP inputs",
  },
  {
    name: "Chips Input",
    path: "/chips-input",
    description: "Input component with removable chips",
  },
  {
    name: "Stepper",
    path: "/stepper",
    description: "Step-by-step form navigation",
  },
  {
    name: "Auto Complete Search Bar",
    path: "/autocomplete-searchinput",
    description: "Search bar with auto-suggestions",
  },
  {
    name: "Memory Game",
    path: "/memory-game",
    description: "A Memory game with Dynamic Grid Size",
  },
];

const Home = () => {
  return (
    <div className="p-3 md:p-10 min-h-screen text-white">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          🧠 React Machine Coding Practice Hub
        </h1>
        <p className="text-lg text-gray-300">
          This project is a personal coding playground to improve your React UI
          development skills through real-world, interview-style component
          challenges. Each challenge focuses on building reusable, scalable UI
          elements — from form steps and search inputs to custom widgets.
        </p>
        <p className="mt-4 text-sm text-gray-500 italic">
          Ideal for frontend devs preparing for interviews or wanting to
          strengthen their problem-solving with hands-on practice.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {challenges.map((c, i) => (
          <Link
            to={c.path}
            key={i}
            className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow transition flex flex-col gap-2"
          >
            <div className="text-xl font-semibold flex items-center gap-2">
              {c.icon}
              {c.name}
            </div>
            <p className="text-gray-400">{c.description}</p>
            <p className="mt-auto text-sm text-blue-400 hover:underline">
              Open this challenge →
            </p>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} React Practice Hub — Build UI Muscle
      </footer>
    </div>
  );
};

export default Home;
