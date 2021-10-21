function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
        console.log('Pose is intualized');
    }
    function draw(){
        background('#FFC0CB');
        
    }
    function gotPoses(results){
        if(results.length > 0 )
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseX = results[0].pose.nose.y;
            console.log("noseX =" + noseX + "noseY=" + noseY);
    
        }
    }