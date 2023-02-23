import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

export function ProjectForm() {
  const [Project, setProject] = useState({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "GetProjects",
    ],
  });

  const handleChange = (e) => {
    setProject({
      ...Project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: Project.name,
        description: Project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      ></textarea>
      <button
        disabled={!Project.name || !Project.description || loading}
        className="bg-green-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400"
      >
        Create
      </button>
    </form>
  );
}
