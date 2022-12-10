import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Chart from './Chart';
import Pichart from './Pichart';

export default function Dashoard() {
    return (<div style={{ width: "85%" }}>
        <div className="container-1">
            <div className="dashboard">
                <h4>Dashboard</h4>
            </div>
            <div className="imgdiv">

                <img src="./Images/location.png" alt=''></img>
                <img src="./Images/bell.png" alt=''></img>
                <img src="./Images/settings.png" alt=''></img>
                <img src="./Images/search.png" alt=''></img>
                <img src="./Images/avatar.png" alt=''></img>

            </div>
        </div>

        <div className='dashboard-container'>
            <div className='activity'>
                <div className="box-c">
                    <div className="box">
                        <img src="./Images/image1.png" alt='' />
                        <div>
                            <h1>Orders</h1>
                            <h2>$21,456</h2>
                            <span>+2.4%</span>
                        </div>
                    </div>
                    <div className="box">
                        <img src="./Images/image2.png" alt='' />
                        <div>
                            <h1>Revenue</h1>
                            <h2>$14,123</h2>
                            <span>+3.1%</span>
                        </div>
                    </div>
                    <div className="box">
                        <img src="./Images/image3.png" alt='' />
                        <div>
                            <h1>Overall</h1>
                            <h2>$32,123</h2>
                            <span>+3.1%</span>
                        </div>
                    </div>
                </div>

                <div className="center-box">
                    <div className='overview'>
                        <div className="center-box-1">
                            <h1>Overview</h1>
                            <h2>Total performance</h2>
                            <h3>$33,123</h3>
                            <h6>+3.5%</h6>
                        </div>
                        <div className="center-box-2">
                            <div className="s1box">
                                <h4>Order</h4>
                                <h3>5,629</h3>
                            </div>
                            <div className="l1">
                            </div>
                            <div className="s2box">
                                <h4>save</h4>
                                <h3>5,629</h3>
                            </div>
                        </div>
                        <div className="l2">
                        </div>
                        <div className="center-box-3">
                            <div className="s1box">
                                <h4>Order</h4>
                                <h3>5,629</h3>
                            </div>
                            <div className="l1">
                            </div>
                            <div className="s2box">
                                <h4>Order</h4>
                                <h3>5,629</h3>
                            </div>
                        </div>
                    </div>
                    <div className='chart-container'>
                        <Chart />
                    </div>
                </div>
                <div className="footer-div">
                    <div className="footer-div-1">
                        <h4>User Activity</h4>
                        <div className="chart"><Chart /></div>
                    </div>
                    <div className="footer-div-2">
                        <Pichart />
                    </div>
                    <div className="footer-div-3">
                        <h4>Top Products</h4>
                        <div>
                            <div className="activity-div">
                                <img src="./Images/image3.png" alt='' />
                                <div className='activity-inner-div'>
                                    <p>Lap</p>
                                    <p>4.2%</p>
                                </div>
                            </div>
                            <div className="activity-div">
                                <img src="./Images/image3.png" alt='' />
                                <div className='activity-inner-div'>
                                    <p>Lap</p>
                                    <p>6.5%</p>
                                </div>
                            </div>
                            <div className="activity-div">
                                <img src="./Images/image3.png" alt='' />
                                <div className='activity-inner-div'>
                                    <p>Lap</p>
                                    <p>3.4%</p>
                                </div>
                            </div>
                            <div className="activity-div">
                                <img src="./Images/image3.png" alt='' />
                                <div className='activity-inner-div'>
                                    <p>Lap</p>
                                    <p>3.4%</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div className="big-box">
                <div className="box-long">
                    <div className='profile'>
                        <img src="./Images/ashiq.jpeg" alt=''></img>
                    </div>
                    <h2>Mohamed Ashiq</h2>
                    <h4>Fresher 2022</h4>
                    <div style={{ display: "flex" }}>
                        <div className="follow1">
                            <h4>Followers</h4>
                            <p>2000k</p>
                        </div>
                        <div className="follow2">
                            <h4>Followers</h4>
                            <p>2000k</p>
                        </div>
                    </div>
                    <h3>Active</h3>
                    <SemiCircleProgressBar percentage={33} showPercentValue diameter={150} />
                    <h4>$32,987</h4>
                    <h4>Active This Month</h4>
                </div>

            </div>


        </div>



    </div>
    )

}
