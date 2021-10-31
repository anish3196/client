import "./charts.css"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  

export default function Charts(){
    const data = [
        {
          year: '2013',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          year: '2014',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          year: '2015',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          year: '2016',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          year: '2017',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          year: '2018',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ];
    return(
        <div className="chart">
          <h3 className="chartTitle">Compony Invetment</h3>
          <ResponsiveContainer width="100%" aspect={4/1}>
              <ComposedChart data={data}>
              <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="year" label={{ value: 'years', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: 'Rupees', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
          </ResponsiveContainer>
        </div>
    )
}