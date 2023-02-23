import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import { TaskList } from "../components/tasks/TaskList";
import { TaskForm } from "../components/tasks/TaskForm";

export function ProjecDetails() {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-between">
      <div>
      <h1 className="text-2x1">{data.project.name}</h1>
      <p>{data.project.description}</p>
      </div>
      </div>
      <button
      className="bg-red-500 px-3 py-2 rounded-lg mb-5 mt-2"
      >Delete Project</button>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  );
}
