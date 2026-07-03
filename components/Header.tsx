import NavBar from "./header/NavBar";

export default function Header() {
  return (
    <header className="z-header">
      <div className="bg-primary-600 text-center h-[30] content-center">
        <p className="text-white text-body-md">
          Enjoy Free Shipping On All Orders
        </p>
      </div>
      <NavBar />
    </header>
  );
}
