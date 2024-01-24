"use client"
import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [project, setProject] = useState({
    title: '',
    developer: '',
    description: '',
    hostedURL: '',
  });

  const handleSubmit = () => {
    axios.post('http://localhost:3001/projects', project)
      .then(response => {
        console.log('Project submitted successfully:', response.data);
      })
      .catch(error => console.error('Error submitting project:', error));
  };

  return (
    <div>
      <h1>Submit a Project</h1>
      <form>
        <label>Title:</label>
        <input type="text" value={project.title} onChange={(e) => setProject({ ...project, title: e.target.value })} />

        <label>Developer:</label>
        <input type="text" value={project.developer} onChange={(e) => setProject({ ...project, developer: e.target.value })} />

        <label>Description:</label>
        <textarea value={project.description} onChange={(e) => setProject({ ...project, description: e.target.value })} />

        <label>Hosted URL:</label>
        <input type="text" value={project.hostedURL} onChange={(e) => setProject({ ...project, hostedURL: e.target.value })} />

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;