noseX="";

noseY="";


function preload() {
    bunnyears=loadImage("redNose.png");
}
 
function setup() {
  canvas = createCanvas(700, 550);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(700,550);
  video.hide();
  poseNetModel= ml5.poseNet(video,modelLoaded);
  poseNetModel.on("pose",getResults);
}
 
 
function modelLoaded() {
    console.log("My model worked it loaded!!!!!!!");
}
 
 
function getResults(resultsArray) {
    if (resultsArray.length>0) {
        console.log(resultsArray);
        console.log("noseX: "+resultsArray[0].pose.nose.x);
        console.log("noseY: "+resultsArray[0].pose.nose.y);
        noseX=resultsArray[0].pose.nose.x-30;
        noseY=resultsArray[0].pose.nose.y-15;
    }
}
 
function draw() {
    image(video,0,0,700,550);
    image(bunnyears,noseX,noseY,50,50);

}
 
function saveIMG(){    
  save('redNose.png');
}
