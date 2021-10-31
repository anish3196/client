import React from 'react'
import "./topbar.css"
import { Message, NotificationsNone, Settings } from '@material-ui/icons'
import MyImage from "../../assets/img/anish.jpg"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Anish Dubey</span>
                </div>
                <div className="topRight">
                    <div className="topbarIocnContainer">
                        <NotificationsNone/>
                        <div className="topIconBadge">3</div>
                    </div>
                    <div className="topbarIocnContainer">
                        <Message/>
                        <div className="topIconBadge">4</div>
                    </div>
                    <div className="topbarIocnContainer">
                        <Settings/>
                    </div>
                    <img src={MyImage} alt="" className="topAvatar" />
                </div>
                </div>   
        </div>
    )
}
