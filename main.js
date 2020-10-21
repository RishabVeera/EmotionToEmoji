Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90 
});
    camera = document.getElementById("camera");

    Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'" >';
    });
}

console.log('ml5 version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QnROZRq89/model.json ',modelloded);

function modelloded(){
    console.log('Model Loaded!');
}

function check(){
    checkimage = document.getElementById("capture_image");
    classifier.classify(checkimage,gotresult);
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        if(results[0].label == "Happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(results[0].label == "Sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(results[0].label == "Angry"){
            document.getElementById("update_emoji").innerHTML = "&#128545;";
        }
        if(results[1].label == "Happy"){
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if(results[1].label == "Sad"){
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if(results[1].label == "Angry"){
            document.getElementById("update_emoji2").innerHTML = "&#128545;";
        }
    }
}