import Navbar from "./components/inc/Navbar";
import Footer from "./components/sections/Footer/Footer";
import Header from "./components/sections/Header/Header";
import Blogs from "./components/sections/blogs/Blogs";
import BottomHero from "./components/sections/bottomHero/BottomHero";

const App = () => {
  return (
    <div className="App animate-slowfade2 flex flex-col gap-y-12">
      <Navbar />
      <Header />
      <Blogs />
      <BottomHero />
      <Footer />
    </div>
  );
};

export default App;
