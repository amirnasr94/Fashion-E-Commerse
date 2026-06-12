import NavBar from "./header/NavBar";

export const fetchCache = "force-no-store";

export default function Header() {
  return (
    <header className="z-header">
      <div className="bg-primary-600 text-center h-[30] content-center">
        <h5 className="text-white">Enjoy Free Shipping On All Orders</h5>
      </div>
      <NavBar />
    </header>
  );
}
