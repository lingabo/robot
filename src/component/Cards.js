import LoadingData from "./LoadingData";
import RobotDetail from "./RobotDetail";

const Cards = ({ listRobots, Loading }) => {
  return (
    <>
      <div className="row card-list row-cols-1 row-cols-sm-2 row-cols-md-5 justify-content-center">
        {listRobots.length === 0 && Loading ? (
          <LoadingData />
        ) : listRobots.length === 0 && !Loading ? (
          <p className="searchinfo">Aucune donnée correspondante !</p>
        ) : (
          listRobots.map((user) => {
            return <RobotDetail user={user} key={user.id} id={user.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Cards;
