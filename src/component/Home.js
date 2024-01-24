import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the backend
    axios.get('http://localhost:5000/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;