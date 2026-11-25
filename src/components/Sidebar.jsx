
function Sidebar({ activePage, setActivePage }) {
  const menuItems = ["Trips", "Itinerary", "Destinations", "Expenses"];

  return (
    <div className="w-60 min-h-screen border-r p-5">
      

      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setActivePage(item)}
          className={`block w-full text-left p-3 mb-2 rounded ${
            activePage === item
              ? "bg-gray-200 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
