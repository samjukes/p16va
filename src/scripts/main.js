console.log('Script running');


const svg = d3.select('#chart');
const circle = svg.append('circle');

circle
  .attr('r', 100)
  .attr('cx', 100)
  .attr('cy', 100)
  .style('fill', 'blue');


