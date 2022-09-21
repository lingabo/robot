import RobotDetail from "./RobotDetail";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Titre from "./Titre";

 
const DetailModal = () => {

  const [user, setUser] = useState({});
  let { id } = useParams();
 const image = `https://robohash.org/${id}/`;
 const requeteUsers = `https://jsonplaceholder.typicode.com/users/${id}/`;
  useEffect(() => {
    try {
      fetch(requeteUsers).then((res) => {
        res.json().then(function (user) {
         
          setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            image: image + user.id,
            website: user.website,
            company: user.company
          });
          
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

 

  return <>
      <div>
        <Titre/>
        <h2 className="Titredetail">Détail robot</h2>
      </div>
      <div className="card styleCard ">
        <img src={user.image} className="card-img-top" alt={user.name} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
        <p>
          Adress :{"  " + user.address?.street + "-" + user.address?.suite}{" "}
        </p>
        <p>Website :{"  www." + user.website}</p>
        <p>Company :{"  " + user.company?.bs}</p>
      </div>
    </>;
};
export default DetailModal;
