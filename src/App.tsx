import Navbar from "./components/inc/Navbar";
import Header from "./components/sections/Header/Header";
import Blogs from "./components/sections/blogs/Blogs";

const App = () => {
  return (
    <div className="App animate-slowfade2 flex flex-col gap-y-6">
      <Navbar />
      <Header />
      <Blogs />
    </div>
  );
};

export default App;
