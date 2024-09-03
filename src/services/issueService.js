import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

const getIssues = () => api.get("/api/issues");
const deleteIssue = (id) => api.delete(`/api/issues/${id}`);
const createIssue = (issue) => api.post("/api/issues", issue);
const updateIssue = (id, issue) => api.patch(`/api/issues/${id}`, issue);

export { getIssues, deleteIssue, createIssue, updateIssue };