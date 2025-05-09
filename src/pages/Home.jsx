import { Link } from "react-router-dom";


const challenges = [
  {
    name:"Tabs Form", path: "/tabs-form"
  },
  {
    name:"Otp Input", path:"otp-input"
  }
]

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-center mb-6 text-4xl font-bold">🧠 React Machine Coding Practice Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {challenges.map((c, i) => (
          <Link to={c.path} key={i}
          className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow transition"
          >
            <h2>{c.name}</h2>
            <p className="">Open this challenge</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;