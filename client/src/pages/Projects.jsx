import { ProjectForm } from "../components/ProjectForm";
import { ProjectList } from "../components/ProjectList";

export function Projects() {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg shadow-black p-8 h-3/5 w-3/5">
     <h1 className="text-2x1 font-bold py-2 mb-4">Apollo reminder App by Russ Madrigal</h1>
     <div className="flex justify-center gap-x-1">
     <ProjectForm />
      <ProjectList />
     </div>
    </div>
  );
}
