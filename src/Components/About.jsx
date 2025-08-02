import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status == 200) {
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;

  const filterData = data
    .filter(
      (item) =>
        item.title.toLowerCase().includes(debounceSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(debounceSearch.toLowerCase()) ||
        item.price
          .toString()
          .toLowerCase()
          .includes(debounceSearch.toString().toLowerCase())
    )
    .slice(IndexOfFirstItem, IndexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">Table Data</h1>
      </div>

      <div className="flex justify-between items-center gap-4 mb-6 flex-wrap">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search or enter data"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-6 py-2 rounded-lg bg-green-700 text-white font-semibold shadow-md hover:bg-green-700 transition-all duration-200"
          onClick={() => setSearch("")}
        >
          Reset Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-4 text-center">Id</th>
              <th className="p-4 text-center">Title</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Description</th>
            </tr>
          </thead>
          {loading ? (
            <>
              <tr className="flex justify-center">
                <td className="text-lg font-semibold" colSpan={2}>
                  Loading...
                </td>
              </tr>
            </>
          ) : (
            <>
              {filterData.map((item) => (
                <tbody key={item.id}>
                  <tr className="even:bg-gray-100 hover:bg-gray-50 transition divide divide-y">
                    <td className="p-4 text-center">{item.id}</td>
                    <td className="p-4 text-center">{item.title}</td>
                    <td className="p-4 text-center">{item.price}</td>
                    <td className="p-4 text-center">{item.description}</td>
                  </tr>
                </tbody>
              ))}
            </>
          )}
        </table>
      </div>
      <div className="flex justify-center my-3 cursor-pointer">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={data?.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="sm:px-4 px-3  py-2 border border-gray-500  sm:text-md text-sm rounded-md mr-1"
          linkClass=""
          activeClass="bg-blue-600 text-white"
          activeLinkClass=""
          prevPageText="<"
          nextPageText=">"
          innerClass="flex"
        />
      </div>
    </div>
  );
};

export default About;
