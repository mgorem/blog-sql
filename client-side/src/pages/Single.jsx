import { Link } from "react-router-dom"
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default Single
