import "./sidebar.css"
import React from 'react'
import { LineStyleRounded,HomeOutlined, ShowChart, ShowChartOutlined, PersonPinCircleOutlined, DonutLargeOutlined, PanoramaWideAngleOutlined, Report, Mail, Feedback, Message, SentimentSatisfied, LinearScaleSharp, ContactPhone, QuestionAnswer, } from "@material-ui/icons"

export default function Sidear() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                    <li className="sidebarListItems">
                      <HomeOutlined className="sidebraIcon"/>
                      Home
                    </li>
                    <li className="sidebarListItems">
                      <ShowChart className="sidebraIcon"/>
                      Analtyics
                    </li>
                    <li className="sidebarListItems">
                      <ShowChartOutlined className="sidebraIcon"/>
                      Sales
                    </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menus</h3>
                    <ul className="sidebarList">
                    <li className="sidebarListItems">
                      <PersonPinCircleOutlined className="sidebraIcon"/>
                      User
                    </li>
                    <li className="sidebarListItems">
                      <DonutLargeOutlined className="sidebraIcon"/>
                      Products
                    </li>
                    <li className="sidebarListItems">
                      <PanoramaWideAngleOutlined className="sidebraIcon"/>
                      Transactions
                    </li>
                    <li className="sidebarListItems">
                      <Report className="sidebraIcon"/>
                      Reports
                    </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                    <li className="sidebarListItems">
                      <Mail className="sidebraIcon"/>
                      Mail
                    </li>
                    <li className="sidebarListItems">
                      <Feedback className="sidebraIcon"/>
                      Feedback
                    </li>
                    <li className="sidebarListItems">
                      <Message className="sidebraIcon"/>
                      Messages
                    </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                    <li className="sidebarListItems">
                      <SentimentSatisfied className="sidebraIcon"/>
                      Manage
                    </li>
                    <li className="sidebarListItems">
                      <LinearScaleSharp className="sidebraIcon"/>
                      Analtyics
                    </li>
                    <li className="sidebarListItems">
                      <Report className="sidebraIcon"/>
                      Report
                    </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Help</h3>
                    <ul className="sidebarList">
                    <li className="sidebarListItems">
                      <QuestionAnswer className="sidebraIcon"/>
                      Questions
                    </li>
                    <li className="sidebarListItems">
                      <ContactPhone className="sidebraIcon"/>
                      Constact Us
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
