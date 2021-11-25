rightEyex=0;
rightEyey=0;
function preload()
{
shadesimage=loadImage('https://i.postimg.cc/L88CSFBS/snowboard-goggle-icon-cartoon-vector-260nw-1271661124-adobespark.png');
}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,poseNetloaded)
poseNet.on('pose',getresults);
}

function draw()
{
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
//circle(nosex,nosey,20);
//circle(leftEarx,leftEary,10);
image(shadesimage,rightEyex,rightEyey,140,140);
}

function TakeSnapshot()
{
    save('MyImage.png');

}
function poseNetloaded()
{
    console.log("poseNet is initalized");
}

function getresults(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("rightEyex="+results[0].pose.rightEye.x);
        console.log("rightEyey="+results[0].pose.rightEye.y);
        console.log("leftEarx="+results[0].pose.leftEar.x);
        console.log("rightEarx="+results[0].pose.rightEar.x);
        rightEyex=results[0].pose.rightEye.x-60;
        rightEyey=results[0].pose.rightEye.y-65;
    }

}