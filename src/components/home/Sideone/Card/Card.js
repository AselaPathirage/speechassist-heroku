import React, { useState } from 'react'
import './Card.css'

import { motion,AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Chart from 'react-apexcharts'
// import {UilTimes} from '@iconscout/react-unicons'

const Card = (props) => {

  const [expaned, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {
        expaned?
          <ExpandedCard param = {props} setExpanded={()=>setExpanded(false)}/>:
        <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
      }
    </AnimateSharedLayout>
  )
}


//compact card
function CompactCard ({param, setExpanded}){
  // const Png = param.png;
  return(
    <motion.div 
    className='CompactCard'
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId ='expandableCard'
    >
      <div className='radialBar'>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
      </div>
      <div className='radialBar' style={{marginLeft:'-20px'}}>
        <CircularProgressbar
          value={param.barValue2}
          text={`${param.barValue2}%`
        }
          />
          <span>{param.title2}</span>
      </div>
      <div className='details'>
        {/* <Png /> */}
        <span>{param.value}</span>
        <span>Last 30 days</span>
      </div>
    </motion.div>
  )
}


function ExpandedCard({param, setExpanded}){

  const data ={
    options: {
      chart:{
        type: "area",
        height: "auto",
      },

      dropShadow:{
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient"
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
        colors: ["white"]
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },

      grid: {
        show: true,
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    }
  }

  return(
    <motion.div
      className="ExpandedCard"
      style={{
        background: "#f8fafd",
        boxshadow: param.color.boxshadow,
        border:"1px solid #031529"
      }}
      layoutId ='expandableCard'
    >
    <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'black'}}>
      {/* <UilTimes onClick={setExpanded}  */}
      <span onClick={()=>setExpanded(false)}>x</span>
      {/* /> */}
    </div>
      <span>{param.title}</span>
      <div className='chartContainer'>
        <Chart series={param.series} type='area' options={data.options}/>
      </div>
      <span>Last 30 days</span>
    </motion.div>
  );
}

export default Card