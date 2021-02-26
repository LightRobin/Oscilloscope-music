let soundPath = 'sounds/Jerobeam Fenderson - Circles.wav';

let sound;

function parseWav(Path) {
  
  let wav = {};
  let curPos = 0;
  
  //let http = new XMLHttpRequest();
  
  //http.onreadystatechange = function(e) {
    
    let data = http.response;
    print(data);
    function readShort() {
      let n1 = data.charCodeAt(curPos);
      let n2 = data.charCodeAt(curPos + 1);
      curPos += 2;
      return n2 * 256 + n1;
    }

    function readLong() {
      let n1 = data.charCodeAt(curPos);
      let n2 = data.charCodeAt(curPos+1);
      let n3 = data.charCodeAt(curPos+2);
      let n4 = data.charCodeAt(curPos+3);
      curPos += 4;
      return n4 * (256 ^ 3) + n3 * (256 ^ 2) + n2 * 256 + n1;
    }

    wav.chunkID = readLong();
    //print(wav.chunkID);
    wav.chunkSize = readLong();
    wav.format = readLong();

    wav.subChunk1ID = readLong();
    wav.subChunk1Size = readLong();

    wav.audioFormat = readShort();
    wav.numChannels = readShort();

    wav.sampleRate = readLong();
    wav.byteRate = readLong();

    wav.blockAlign = readShort();
    wav.bitsPerSample = readShort();

    wav.subChunk2ID = readLong();
    wav.subChunk2Size = readLong();

    wav.mainData = {};

    let readfunc = function() {}

    if(wav.bitsPerSample == 32) {
      readfunc = readLong;
    }else if(wav.bitsPerSample == 16) {
      readfunc = readShort;
    }

    let maxInt = (2 ^ wav.bitsPerSample) / 2;

    for(i=0; i<wav.subChunk2Size / (wav.bitsPerSample / 8); i++){

      let val = readfunc();
      wav.mainData[i] = val - maxInt  ;                                   
    }
  //}
  
  //http.open("GET", URL);
  //http.overrideMimeType("text/plain; charset=x-user-defined");
  //http.send();
  
  return wav;
}



function setup() {
  createCanvas(800, 800);
  sound = new Audio(soundPath);
  sound.play();
  //var wav = parseWav(soundPath);
}

function draw() {

  background(63, 89, 89);
  // grid
  noStroke();
  fill(color(0, 0, 0, 150));
  for (k = 1; k <= 9; k++) {
    rect((k * (800 / 10)) - 3 / 2, 0, 3, 800);
    rect(0, (k * (800 / 10)) - 3 / 2, 800, 3);
  }
  // line dash's
  for (k = 1; k < 50; k++) {
    rect(400 - 9, ((800 / (50)) * k) - 3 / 2, 18, 3)
    rect(((800 / (50)) * k) - 3 / 2, 400 - 9, 3, 18)
  }

}
