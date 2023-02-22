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
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Update</button>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  );
}
