
const RobotDetail = ({ user }) => (
  <div className="card bg-green">
    <img src={user.image} className="card-img-top" alt={user.name} />
    <div className="card-body text-center">
      <h5 className="card-title fw-bold">{user.name}</h5>
      <p className="card-text">{user.email}</p>
    </div>
  </div>
);
export default RobotDetail;
