import React, { useEffect, useState } from "react";
import { createIssue, updateIssue } from "../services/issueService";

export default function IssueForm({issues, setIssues, editingIssue, setEditingIssue}) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => { 
    if (editingIssue) {
      setTitle(editingIssue.title);
      setDescription(editingIssue.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingIssue]);

  const handleSubmit = (event) => { 
    event.preventDefault();

    if (editingIssue) {
      editIssue();
    } else {
      addIssue();
    }

    setTitle('');
    setDescription('');
    setEditingIssue(null);
  };

  const addIssue = () => { 
    createIssue({title, description})
      .then((response) => {
        setIssues([...issues, response.data]);
      })
      .catch(err => console.error(err));
  };


  const editIssue = () => {
    updateIssue(editingIssue._id, {title, description})
      .then((response) => {
        setIssues(issues.map(issue => issue._id === editingIssue._id ? response.data : issue));
      })
      .catch(err => console.error(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <div>Description</div>
      <input type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <div>
        <button type="submit">{ editingIssue ? 'Edit Issue' : 'Add Issue'}</button>
      </div>
    </form>
  );
}