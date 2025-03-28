
import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Nav() {
  const [search, setSearch] = useState("");
  const categories = [
    "Home", "All", "Coffee", "Dessert", "Freshguice", "contact", "Location",
    "About"
  ];

  return (
    <nav className="bg-gradient-to-r from-[#8B5A2B] to-[#D2B48C] shadow-lg shadow-[#6F4E37]/40 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-[white]">Cafe</div>

        {/* Delivery Info */}
        <div className="hidden md:flex items-center space-x-2 text-[white]">
          <span className="font-semibold">
            Delivery in <span className="text-[white]">12 Mins</span>
          </span>
          <ChevronDown size={16} className="cursor-pointer" />
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            className="border border-[#6F4E37] rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-[#5C4033]" size={18} />
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          <User className="text-[#5C4033] cursor-pointer hover:text-[#8B5A2B]" size={24} />
          <ShoppingCart className="text-[#5C4033] cursor-pointer hover:text-[#8B5A2B]" size={24} />
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="container mx-auto mt-4 flex justify-center space-x-6 text-[white] font-medium text-sm overflow-x-auto">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer hover:text-[#8B5A2B] flex flex-col items-center">
            <span className={index === 0 ? "border-b-2 border-[#8B5A2B] pb-1" : ""}>{category}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
