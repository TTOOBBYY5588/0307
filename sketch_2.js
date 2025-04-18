function setup() { //設定函數,設定初始值的地方
  //建立依照視窗的寬與高當作畫布的大小  
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB);
  //設定背景顏色為灰色
  background(220);
}

function draw() {
  background(220);
  //設定方框的顏色為黑色
  fill(0);
  //設定方框的外框為白色
  stroke(255);
  //設定方框的外框寬度為5
  strokeWeight(5);
  //在視窗的中間畫一個方框,以方框中心為基準,並設定方框的寬高為200
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 200, 200);
  //在方框的中間畫一個圓,以圓心為基準,並設定圓的寬高為200
  ellipseMode(CENTER);
  ellipse(windowWidth/2, windowHeight/2, 200, 200);

  // 讓整個視窗充滿圓形與圓形
  let spacing = 50; // 圓形之間的間距
  for (let x = 0; x < windowWidth; x += spacing) {
    for (let y = 0; y < windowHeight; y += spacing) {
      // 使用HSB顏色模式設定顏色
      fill((x + y) % 360, 100, 100);
      ellipse(x, y, spacing, spacing);
    }
  }
}

//當視窗的大小改變時,畫布的大小也會跟著改變
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

