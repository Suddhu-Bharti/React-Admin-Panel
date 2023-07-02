import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://th.bing.com/th/id/OIP.LGLCPeYINqgUjIE3J8FBrAAAAA?pid=ImgDet&w=400&h=400&rs=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 23484 98743</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Bangalore, Karnataka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single
