"use client";
import Link from "next/link";

const Header1 = () => {
  return (
    <header>
      <nav className="container mx-auto py-4 flex items-center justify-between bg-slate-500">
        <div className="logo">
          <Link href="/" className="text-xl font-bold ">
            App
          </Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header1;
