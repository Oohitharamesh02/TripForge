
import { User } from "lucide-react";

function Navbar() {
  return (
    <div className="h-16 border-b flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">TripForge</h2>

      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
        <User size={20} />
      </div>
    </div>
  );
}

export default Navbar;
