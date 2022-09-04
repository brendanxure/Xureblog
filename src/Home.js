import Blogcont from "./Component/Blogcont";
import Footer from "./Component/Footer";
import Logo from "./Component/Logo";
import Navbar from "./Component/Navbar";


function Home({post, logoName, search, setSearch}) {
    
  return (
    <div className="Home">
     <Logo logoName={logoName} />
     <Navbar 
     search={search}
     setSearch={setSearch}
     />
     <Blogcont post={post} />
     <Footer />
    </div>
  );
}

export default Home;