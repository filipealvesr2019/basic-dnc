import "./ProjectsList.css";
import LikedFilled from "../../assets/like_filled.svg";

export default function ProjectsList(props) {
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
        <div className="projects-card d-flex jc-center fd-column ">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
        <div className="projects-card d-flex jc-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>Pedro Alves</h3>
          <p>São Paulo, Brasil</p>
          <img src={LikedFilled} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}
