import { Card } from "flowbite-react";

export default function LandingPage() {
  return (
    <div>
      <Card>
        <h1 className="font-semibold text-2xl mb-5 text-gray-500 dark:text-gray-400">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Hello, Visitor</span> &#128075;
        </h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">This web app is for Revou Assignment Week 17.</p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">You can register or login, by clicking on the user icon at the top right of the screen.</p>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-5 dark:bg-gray-700" />
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">After Loggedin, you can create your own todos list.</p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">You also able to perform CRUD on your own Todos. </p>
      </Card>
    </div>
  );
}
