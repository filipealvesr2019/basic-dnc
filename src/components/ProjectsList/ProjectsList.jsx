import { useState, useEffect } from "react";
import "./ProjectsList.css";
import LikedFilled from "../../assets/like_filled.svg";

// UTILS
import { getApiData } from "../../Services/apiServices";

export default function ProjectsList(props) {
  const [projects, setProjects] = useState([]);

const thumbsMock = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657907157592-dd6cfb9d06cf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1585128792020-803d29415281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJvb218ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1630699144919-681cf308ae82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJvb218ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb218ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJvb218ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJvb218ZW58MHx8MHx8fDA%3D",
];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData(`projects`);
          const projectsWithThumbs = projectsResponse.map((project, index) => ({
        ...project,
        thumb: thumbsMock[index % thumbsMock.length], // roda a lista se tiver mais projetos
      }));

      setProjects(projectsWithThumbs);
      } catch(err){
        setProjects([])
      }
    }

    fetchData()
  }, [])

  
  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div  className="projects-grid">
      { projects ? projects.map((project) => (
        <div className="projects-card d-flex jc-center fd-column" key={project.id}>
            <div 
            className="thumb tertiary-background"
            style={{ backgroundImage: `url(${project.thumb})`}}
            ></div>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
      )) : null}
       
      </div>
    </div>
  );
}
