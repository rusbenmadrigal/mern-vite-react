import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # Queries
  type Query {
    hello: String
    projects: [Project]
    tasks: [Task]
  }

  # Mutations
  type Mutation {
    createProject(name: String!, description: String!): Project
    createTask(title: String!, projectId: String!): Task
  }

  # Objects
  type Project {
    _id: ID!
    name: String!
    description: String!
    tasks: [Task]!
  }

  type Task {
    _id: ID!
    title: String!
    project: Project!
  }
`;
