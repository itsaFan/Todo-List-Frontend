/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import AddTodoForm from "../forms/add-todo-form";
import { createTodo } from "../../api/todo-api";
import { message } from "antd";
// import setHours from 'date-fns/setHours';
// import setMinutes from 'date-fns/setMinutes';

export default function AddTodo({ onAdd }) {
  const { userPayload, accessToken } = useAuth();
  const username = userPayload?.username;
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  // const deadlineRef = useRef(null);
  const [deadline, setDeadline] = useState(null);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    // const deadline = deadlineRef.current.value;

    try {
      await createTodo(title, description, deadline, accessToken);
      message.config({
        top: 180,
      });
      message.success("New Todo Added Successfully!");
      if (onAdd) {
        onAdd();
      }
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      // deadlineRef.current.value = "";
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  return (
    <div className="w-full lg:w-72 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-main-dark dark:border-none">
      <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-2xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-600 ">Hello, {username ? username.charAt(0).toUpperCase() + username.slice(1) : ""}</span>
        <br />
        What&apos;s the Plan for Today?
      </h1>
      <AddTodoForm titleRef={titleRef} descriptionRef={descriptionRef} setDeadline={setDeadline} deadline={deadline} onSubmit={handleAddTodo} />
    </div>
  );
}
