import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import DeleteModal from "../../components/DeleteModal";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import "./Project.css";

export default function ProjectSummary({ project }) {
  const { user } = useAuthContext();
  const [deleteProj, setDeleteProj] = useState(false);
  const { deleteDocument } = useFirestore("projects");
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteDocument(project.id);
    setDeleteProj(false);
    navigate("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project Due By: {project.dueDate.toDate().toDateString()}
          <span>{project.category}</span>
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={() => setDeleteProj(true)}>
            Delete Project
          </button>
        )}
      </div>
      {deleteProj && (
        <DeleteModal>
          <div>
            <h2>Are you Sure</h2>
            <button onClick={handleDelete} className="btn">
              Yes
            </button>
            <button onClick={() => setDeleteProj(false)} className="btn">
              No
            </button>
          </div>
        </DeleteModal>
      )}
    </div>
  );
}
