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
    <form onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}

      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
      ></textarea>
      <button disabled={!Project.name || !Project.description || loading}>
        Create
      </button>
    </form>
  );
}
