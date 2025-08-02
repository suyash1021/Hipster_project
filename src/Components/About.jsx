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

  const filterData = data?.filter((item) =>
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
  
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 ">
      <div className="text-center mb-6">
        <h1 className="text-2xl text-blue-500 sm:text-3xl md:text-4xl font-bold ">
          Table Data
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
        <input
          type="text"
          className="w-full sm:max-w-sm px-4 py-2 text-green-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search or enter data"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSearch("")}
          className="w-full sm:w-auto px-6 py-2 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800 transition duration-200 font-semibold"
        >
          Reset Data
        </button>
      </div>

      <div className="overflow-x-auto  rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm md:text-base">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs sm:text-sm">
            <tr>
              <th className="px-4 py-3 text-center whitespace-nowrap">Id</th>
              <th className="px-4 py-3 text-center whitespace-nowrap">Title</th>
              <th className="px-4 py-3 text-center whitespace-nowrap">Price</th>
              <th className="px-4 py-3 text-center whitespace-nowrap">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-600 text-base"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              filterData.map((item) => (
                <tr
                  key={item.id}
                  className=" transition-colors"
                >
                  <td className="px-4 py-3 text-center">{item.id}</td>
                  <td className="px-4 py-3 text-center">{item.title}</td>
                  <td className="px-4 py-3 text-center">{item.price}</td>
                  <td className="px-4 py-3 text-center">{item.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={data?.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          itemClass="px-3 py-2 border border-gray-400 rounded-md text-sm sm:text-base mx-1"
          activeClass="bg-blue-600 text-white"
          prevPageText="<"
          nextPageText=">"
          innerClass="flex flex-wrap justify-center"
        />
      </div>
    </div>
  );
};

export default About;
