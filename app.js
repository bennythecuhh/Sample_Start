const message = prompt("Create a candidate");

let candidates = [
    { name: 'Peter Parker', likes: 700},
    { name: 'Tony Stark', likes: 135},
    { name: 'dash', likes: 0},
    { name: '', likes: 0}
  ]

  candidates[3].name=message;

  document.write("<p id=doc1>"+ candidates[0].name + " <span id=like1>" + candidates[0].likes+ "</span><span id=likea>Like</span> <span id=deletea>Delete</span></p>");
  document.write("<p id=doc2>"+ candidates[1].name + " <span id=like2>" + candidates[1].likes+ "</span><span id=likeb> Like</span><span id=deleteb>Delete</span></p>");
  document.write("<p id=doc3>"+ candidates[2].name + " <span id=like3>" + candidates[2].likes+ "</span><span id=likec> Like</span><span id=deletec>Delete</span></p>");
  document.write("<p id=doc4>"+ candidates[3].name + " <span id=like4>" + candidates[3].likes+ "</span><span id=liked> Like</span><span id=deleted>Delete</span></p>");

  $("#deletea").click(function(){
    $("#doc1").hide();
});

$("#deleteb").click(function(){
    $("#doc2").hide();
});

$("#deletec").click(function(){
    $("#doc3").hide();
});

$("#deleted").click(function(){
    $("#doc4").hide();
});

$("#likea").click(function(){
    candidates[0].likes++;

    $("#like1").text(candidates[0].likes);
});

$("#likeb").click(function(){
    candidates[1].likes++;

    $("#like2").text(candidates[1].likes);
});

$("#likec").click(function(){
    candidates[2].likes++;

    $("#like3").text(candidates[2].likes);
});

$("#liked").click(function(){
    candidates[3].likes++;

    $("#like4").text(candidates[3].likes);
});


/*
like contain the different attributes
doc 1 example
}*/