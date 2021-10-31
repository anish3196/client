import React from 'react'
import "./feature.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function Feature() {
    return (
        <div className="feature">
            <div className="featureItem">
                <span className="featureTitle">Revenue</span>
                <div className="fetureMoneyContainer">
                    <span className="featureMoney">2.45 Lakhs</span>
                    <span className="featureMoneyRate">
                        -9.8 <ArrowDownward className="featureIcon negative"/>
                    </span>
                </div>
                <span className="featureSubTitle">Comapre to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Sales</span>
                <div className="fetureMoneyContainer">
                    <span className="featureMoney">3.4 Lakhs</span>
                    <span className="featureMoneyRate">
                        +4.8 <ArrowUpward className="featureIcon"/>
                    </span>
                </div>
                <span className="featureSubTitle">Comapre to last month</span>
            </div>
            <div className="featureItem">
                <span className="featureTitle">Cost</span>
                <div className="fetureMoneyContainer">
                    <span className="featureMoney">3.2 Lakhs</span>
                    <span className="featureMoneyRate">
                        -6.8 <ArrowDownward className="featureIcon negative"/>
                    </span>
                </div>
                <span className="featureSubTitle">Comapre to last month</span>
            </div>
        </div>
    )
}
