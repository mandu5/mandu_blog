import { useRouter } from "next/navigation";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const router = useRouter();
  const toHome = () => {
    router.push("/");
  };
  const toAbout = () => {
    router.push("/about");
  };
  const toBlog = () => {
    router.push("/blog");
  };
  return (
    <header className="header" onClick={scrollToTop}>
      <div className="w-10 h-10 rounded-lg bg-white blue-gradient_text items-center justify-center flex font-bold shadow-md hover:opacity-60">
        <button onClick={toHome}>M</button>
      </div>
      <div className="flex text-lg gap-7 font-medium">
        <button onClick={toAbout} className="hover:opacity-60 blue-gradient_text">
          About
        </button>
        <button onClick={toBlog} className="hover:opacity-60 blue-gradient_text">
          Blog
        </button>
      </div>
    </header>
  );
};

export default Navbar;
