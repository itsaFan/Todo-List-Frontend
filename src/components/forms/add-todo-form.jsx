/* eslint-disable react/prop-types */
import { Button, Select, TextInput } from "flowbite-react";

export default function AddTodoForm({ titleRef, descriptionRef, onSubmit }) {
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <TextInput color="info" placeholder="Plan" name="title" id="title" ref={titleRef} required />
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
      <div>
        <Button type="submit" gradientDuoTone="pinkToOrange" outline>
          Add
        </Button>
      </div>
    </form>
  );
}
