function setup() { //設定函數,設定初始值的地方
  //建立依照視窗的寬與高當作畫布的大小  
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
}

function draw() {
  // 清除背景
  background(220);

  // 計算色相和亮度
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色
  fill(hue, 100, brightness);
  noStroke();

  // 在滑鼠位置畫一個圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗的大小改變時,畫布的大小也會跟著改變
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

