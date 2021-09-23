x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    for( var i = 1; i<= to_number; i++)
    {
        x= Math.floor(Math.random() * 700);
        y= Math.floor(Math.random() * 400);
       Image(apple,x,y, 50, 50);
    }
    
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_apple == "set")
    {
        var i_to_1;
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").to_number = "Apple drawn. ";
        draw_apple = "";
    }

    
}

to_number = Number(content);