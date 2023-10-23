/* eslint-disable react/prop-types */
import { Button, Label, TextInput } from "flowbite-react";

export default function EditTodoForm({ onSubmit, titleRef, descriptionRef, defaultTitle, defaultDescription}) {
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Edit Your Todo" />
        </div>
        <TextInput color="info" placeholder="Plan" name="title" id="title" ref={titleRef} defaultValue={defaultTitle} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Edit Your Description" />
        </div>
        <TextInput color="info" placeholder="Details" name="description" id="description" ref={descriptionRef} defaultValue={defaultDescription}  />
      </div>

      <div className="flex gap-2 mt-5">
        <Button type="submit" gradientDuoTone="pinkToOrange" outline>
          Edit
        </Button>
      </div>
    </form>
  );
}
