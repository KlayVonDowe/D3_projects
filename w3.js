const dataset =[12, 31, 22, 17, 25, 18, 29, 14, 9];
//d3.select("body").append("h1").text("test")
//d3.selectAll('a').text("all <a> elements")
//d3.select('body').selectAll('h1').data(dataset).enter().append('h2').text((d)=>d).style("color",(d) => {
    //if(d < 20){return 'red'}else return 'green'
//}).attr('class','bar').style('width',(a)=>a)
d3.select('body').selectAll('div').data(dataset).enter().append('div').attr('class','bar').style('width',d  => (d* 10 + 'px'))
const w = 500;
const h = 100;

const svg = d3.select('body').append('svg').attr('width',w).attr('height',h).style('background-color','pink');

svg.selectAll('rect').data(dataset).enter().append('rect').attr('width',25)
.attr('height',100).attr('x',(d,i)=>{return i * 30}).attr('y',(d,i)=>{return h - d * 3}).attr('fill','green')

svg.selectAll('text').data(dataset).enter().append('text').attr('x',(d,i)=> i * 30).attr('y',(d,i)=>h-3*d-3).text((d)=>d)