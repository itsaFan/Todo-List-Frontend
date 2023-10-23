/* eslint-disable react/prop-types */
import { debounce } from "lodash";
import { searchTodos } from "../../api/todo-api";
import { useAuth } from "../../context/auth-context";
import { TextInput } from "flowbite-react";
import { HiOutlineSearchCircle } from "react-icons/hi";

export default function SearchTodoForm({ setLoading, setTodos }) {
  const { accessToken } = useAuth();

  const debouncedSearch = debounce(async (query) => {
    try {
      setLoading(true);
      const data = await searchTodos(accessToken, query);
      setTodos(data.todos);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    } finally {
      setLoading(false);
    }
  }, 300);

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="my-4">
      <TextInput
        icon={HiOutlineSearchCircle}
        id="search" 
        name="search" 
        type="text" 
        placeholder="Search Todos..." 
        onChange={handleSearchChange} 
         />
    </div>
  );
}
