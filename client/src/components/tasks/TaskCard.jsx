import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";

export function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between">
      <h1 className="text-sm">{task.title}</h1>
      <button
       
        onClick={() => {
          deleteTask({
            variables: {
              id: task._id,
            },
          });
        }}
      >
        <FaTrashAlt/>
        
      </button>
    </div>
  );
}
