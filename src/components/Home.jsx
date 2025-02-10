import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-5">Student Performance Analyzer</h1>
      <Link to="/form" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go to Prediction Form
      </Link>
    </div>
  );
}

export default Home;
