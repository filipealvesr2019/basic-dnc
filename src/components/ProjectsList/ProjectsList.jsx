import { useState, useEffect } from "react";
import "./ProjectsList.css";
import LikedFilled from "../../assets/like_filled.svg";

// UTILS
import { getApiData } from "../../Services/apiServices";

export default function ProjectsList(props) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData(`projects`);
        setProjects(projectsResponse)
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
      <div className="projects-grid">
      {projects.map((project) => (
        <div key={}>

        </div>
      )}
        <div className="projects-card d-flex jc-center fd-column ">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <div>
          <img src={LikedFilled} alt="" className="img" />

          </div>
        </div>
      </div>
    </div>
  );
}
