import React, { useEffect, useState } from "react";
import { getIssues, deleteIssue } from "../services/issueService";
import IssueForm from "./IssueForm";

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const [editingIssue, setEditingIssue] = useState(null);

  useEffect(() => { 
    getIssues().then((result) => {
      setIssues(result.data);
    }).catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    deleteIssue(id)
      .then(() => {
        setIssues(issues.filter(issue => issue._id !== id));
      })
      .catch(err => console.error(err));
  };

  const startEditing = (issue) => { 
    setEditingIssue(issue);
  };
  
  return (
    <>
      <IssueForm issues={issues} setIssues={setIssues} editingIssue={editingIssue} setEditingIssue={setEditingIssue}></IssueForm>
      <div>
        <h1>Issues</h1>
        <ul>
          {
            issues.map(issue => (
              <li key={issue.id}>
                <h2>{issue.title}</h2>
                <p>{issue.description}</p>
                <button onClick={() => startEditing(issue)}>Update</button>
                <button onClick={() => handleDelete(issue._id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}