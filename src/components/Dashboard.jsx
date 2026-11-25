
function Dashboard({ activePage }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-3">
        {activePage}
      </h1>

      <p className="text-gray-500">
        Welcome to {activePage} page.
      </p>
    </div>
  );
}

export default Dashboard;
