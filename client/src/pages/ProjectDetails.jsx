import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import { TaskList } from "../components/tasks/TaskList";
import { TaskForm } from "../components/tasks/TaskForm";
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { DELETE_PROJECT } from "../graphql/projects";

export function ProjecDetails() {

  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
  });



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;


  return (
    <div>
      <button
       
       onClick={() => {
        deleteProject({
           variables: {
             id: project._id,
           },
         });
       }}
     >
       <FaTrashAlt/>
       
     </button>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-between">
      <div>
      <h1 className="text-2x1">{data.project.name}</h1>
      <p>{data.project.description}</p>
      </div>
      </div>
      
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  );
}

