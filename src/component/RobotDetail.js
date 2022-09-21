import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// console.log(users);
const RobotDetail = ({ user }) => (
  <Link to={`user/${user.id}`}>
    <div className="card bg-green">
      <img src={user.image} className="card-img-top" alt={user.name} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{user.name}</h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  </Link>
);
export default RobotDetail;
