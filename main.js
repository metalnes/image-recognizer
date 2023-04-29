//https://teachablemachine.withgoogle.com/models/Ez6k-y7JN/
Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach(camera)

function snapshot(){
    Webcam.snap(function(data_uri){;
        console.log(data_uri);
        document.getElementById("result").innerHTML="<img id='captured_image'  src='"+data_uri+"' > ";

    })
}
console.log(ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ez6k-y7JN/model.json",Modelloaded);

function Modelloaded(){
    console.log("Model Loaded");

}
function check(){
    captured_image=document.getElementById("captured_image");
    classifier.classify(captured_image,gotresult);
}
function gotresult(error,result){
   if(error){
    console.error(error)
   }
 else{
    console.log(result)
    document.getElementById("objectname").innerHTML=result[0].label
    document.getElementById("accuracy").innerHTML=(result[0].confidence*100).toFixed(2)
 } 
}

