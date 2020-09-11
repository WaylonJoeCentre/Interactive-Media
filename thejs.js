d3.select("#h1")
    .on("click", function()
{
    d3.select("#h1")
        .text("This is a header");
})
d3.select("#h1")
    .on("mouseleave", function()
{
    d3.select("#h1")
        .text("THIS IS NOT A HEADER");
})

d3.select("#img1")
    .on("click", function()
{
    d3.select("#img1")
    .attr("src","images/Peacock.jpg");
})

d3.select("#img1")
    .on("mouseleave", function()
{
    d3.select("#img1")
    .attr("src","images/Glass-Bottle.jpg");
})

d3.select("#img2")
    .on("click", function()
{
    d3.select("#img2")
    .attr("src","images/Peacock.jpg");
})

d3.select("#img2")
    .on("mouseleave", function()
{
    d3.select("#img2")
    .attr("src","images/The-Girl.jpg");
})