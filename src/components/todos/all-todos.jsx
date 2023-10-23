/* eslint-disable react/prop-types */
import { useState } from "react";
import { Table, Pagination, Alert, Spinner } from "flowbite-react";
import DeleteTodo from "./delete-todo";
import EditTodo from "./edit-todo";
import { useAuth } from "../../context/auth-context";
import { formatDate } from "../../utils/format";

export default function AllTodo({ todos, loading, onDelete, onEdit }) {
  const { userPayload } = useAuth();
  const isAdmin = userPayload?.role === "ROLE_ADMIN";
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  //   const todosData = Array(100).fill("Test");

  const reversedTodos = [...todos].reverse();
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return reversedTodos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div>
      {loading ? (
        <div className="text-center mt-20">
          <Spinner aria-label="Todo Table Loading" size="lg" />
        </div>
      ) : (
        <div className="relative overflow-x-auto  ">
          {reversedTodos.length === 0 ? (
            <Alert color="info">
              <span>
                <p>
                  <span className="font-medium">Empty! </span>
                  No todos found
                </p>
              </span>
            </Alert>
          ) : (
            <>
              <div>
                <Table striped hoverable>
                  <Table.Head>
                    <Table.HeadCell>Title</Table.HeadCell>
                    <Table.HeadCell>Description</Table.HeadCell>
                    <Table.HeadCell>Date Created</Table.HeadCell>
                    {isAdmin && <Table.HeadCell>Author</Table.HeadCell>}
                    <Table.HeadCell>Action</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {getCurrentPageData().map((todo, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>{todo.title}</Table.Cell>
                        <Table.Cell>{todo.description}</Table.Cell>
                        <Table.Cell>{formatDate(todo.createdOn)}</Table.Cell>
                        {isAdmin && <Table.Cell>{todo.createdBy.username}</Table.Cell>}
                        <Table.Cell className="flex">
                          <div className="hover:opacity-70">
                            <DeleteTodo todoId={todo._id} onTodoDeleted={onDelete} />
                          </div>
                          <div className="hover:opacity-70">
                            <EditTodo todoId={todo._id} currentTitle={todo.title} currentDescription={todo.description} onEdited={onEdit} />
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
              <div className="flex items-center justify-center my-4">
                <Pagination currentPage={currentPage} layout="pagination" nextLabel="Next" previousLabel="Back" onPageChange={onPageChange} showIcons totalPages={Math.ceil(todos.length / ITEMS_PER_PAGE)} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
