import React from "react";
import * as d3 from "d3";
import { useD3 } from './useD3.js'
// Temporary load static local data
//import data from "./weather.json"
//import data from "./cities.csv"

function BarChart(props) {
	// if(props === {}){
	// 	return(<div></div>)
	// }else {
	//console.log(data)
	const data = props
	let days = data.daily
	const date = []
	//converts dt to month/day format
	for (let x in days) {
    //for (let x = 1; x < 8; x++) {
    let utcSeconds = days[x].dt
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    let currentTimestamp = d
    //console.log(currentTimestamp); // get current timestamp
    let fate = new Intl.DateTimeFormat('en-US',
      { month: '2-digit', day: '2-digit' }).format(currentTimestamp)
		date.push(fate)
	}
	//console.log(date)
		const ref = useD3((svg) => {
		const height = 500
		const width = 800
		const margin = { top: 20, right: 30, bottom: 30, left: 80 }

		const xscale = d3
			.scaleBand()
			//.domain(data.daily.map(d => d.dt))
			.domain(date.map(d => d))
			.rangeRound([margin.left, width - margin.right])
			.padding(0.125)

		const yscale = d3
			.scaleLinear()
			.domain([-30,120])
			.rangeRound([height - margin.bottom, margin.top])
		
		const bottomAxis = d3.axisBottom(xscale)
	 	const leftAxis = d3.axisLeft(yscale)
		//---------------------------------------------

		//  const graphArea = svg
		//  .append('g')
		//  .attr('transform', `translate(${margin.left}, ${margin.top})`);
		 const defs = svg.append('defs');

		 const bgGradient = defs
			 .append('linearGradient')
			 .attr('id', 'bg-gradient')
			 // .attr('x1', '0')
			 // .attr('y1', '0')
			 // .attr('x2', '0')
			 // .attr('y2', '1')
			 .attr('gradientTransform', 'rotate(90)');
	 
		 bgGradient
			 .append('stop')
			 .attr('stop-color', 'red')
			 .attr('offset', '0%');
		 bgGradient
			 .append('stop')
			 .attr('stop-color', 'skyblue')
			 .attr('offset', '100%');
	 
		//  const clipPath = graphArea
		// 	 .append('g')
		// 	 .attr('clip-path', `url(#clip-bar-rects)`);
	 
		//  clipPath
		// 	 .append('rect')
		// 	 .attr('x', 0)
		// 	 .attr('y', 0)
		// 	 .attr('width', width)
		// 	 .attr('height', height)
			//  .style('fill', 'url(#bg-gradient)');
		// 	 const ax = graphArea
    // .append('g')
    // .attr('class', 'axis')
    // .attr('transform', `translate(0, ${height})`)
    

  // graphArea
  //   .append('g')
  //   .attr('class', 'axis')
   

//------------------------------------------------
		svg
			.select('.x-axis')
			.attr('transform', `translate(0, ${height - margin.bottom})`)
			.call(bottomAxis)

		svg
			.select('.y-axis')
			.attr('transform', `translate(${margin.left}, 0)`)
			.call(leftAxis)

		svg
			.select('.plot-area')
			.selectAll('.bar')
			.data(data.daily)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr('x', (d, i) => {
				console.log(date[i])
				console.log(xscale( date[i]))
				return xscale(date[i])

			})
			.attr('width', xscale.bandwidth())
			.attr('y', d => yscale(d.temp.day))
			.attr('height',d => yscale(-30) - yscale(d.temp.day))
			.style('fill', 'url(#bg-gradient)');

	}, [days.length])
	
  return (
    <svg
			ref={ref} // Don't forget to add this line!
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  ) 
}
// }
export default BarChart