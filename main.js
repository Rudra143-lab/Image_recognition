

    Webcam.set({
        height: 344,
        width: 340,
        image_format: "png",
        png_quality: 90
    });

camera = document.getElementById("cam");
Webcam.attach(camera);

function take_snapshot(){
      Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML='<img id="my_image" src="'+data_uri+'"/>';
      });
}

console.log("ml5",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZWHULRKfb/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model_Loaded");
}

function check(){
    img=document.getElementById("my_image");
    classifier.classify(img,got_result);
}

function got_result(error,result){
      if(error){
          console.error(error);
      } else{
          console.log(result);
          document.getElementById("o").innerHTML=result[0].label;
          document.getElementById("a").innerHTML=result[0].confidence.toFixed(3);

      }
}