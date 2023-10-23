/* eslint-disable react/prop-types */
import { Button, Select, TextInput } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTodoForm({ titleRef, descriptionRef, setDeadline, deadline, onSubmit }) {
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <TextInput  color="info" placeholder="Plan" name="title" id="title" ref={titleRef} required />
      </div>
      <div>
        <TextInput color="info" placeholder="Details (optional)" name="description" id="description" ref={descriptionRef} />
      </div>
      <div>
        <Select id="priority" color="info">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>
      </div>
      <div className="flex">
        <div className="relative w-full">
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg "
            placeholderText="Set Deadline (optional)"
            isClearable
          />
        </div>
      </div>
      <div>
        <Button type="submit" gradientDuoTone="pinkToOrange" outline>
          Add
        </Button>
      </div>
    </form>
  );
}
