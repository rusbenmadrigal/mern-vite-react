import { ProjectForm } from "../components/ProjectForm";
import { ProjectList } from "../components/ProjectList";

export function Projects() {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg shadow-black p-8 h-3/5 w-3/5">
      <h1 className="flex flex-col justify-center items-center text-2xl font-bold py-2 mb-4">
        List of reminders in ReactJS by Russ
      </h1>
      <div className="flex justify-center gap-x-1">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}
