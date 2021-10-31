import React from 'react'
import Charts from '../../components/charts/Charts'
import Feature from '../../components/features/Feature'
import "./home.css"

export default function Home() {
    return (
        <div className="homepage">
            <Feature/>
            <Charts/>
        </div>
    )
}
