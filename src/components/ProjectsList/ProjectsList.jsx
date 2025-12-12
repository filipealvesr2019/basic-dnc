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
  "https://source.unsplash.com/random/400x300?architecture",
  "https://source.unsplash.com/random/400x300?design",
  "https://source.unsplash.com/random/400x300?house",
  "https://source.unsplash.com/random/400x300?building",
  "https://source.unsplash.com/random/400x300?work",
  "https://source.unsplash.com/random/400x300?studio",
  "https://source.unsplash.com/random/400x300?workspace",
  "https://source.unsplash.com/random/400x300?decoration",
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
      {projects.map((project) => (
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
      ))}
       
      </div>
    </div>
  );
}
