var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 60;
var GAP = 10;
var GAP_TO_BORDER_HORIZONTAL = 50;
var GAP_TO_BORDER_VERTICAL = 220;
var GAP_BETWEEN_COLUMN = 50;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = 150;

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


function rand(min, max) {
  return min + Math.random() * (max - min);
}

function get_random_color() {
  var h = rand(210, 240);
  var s = rand(0, 100);
  var l = rand(45, 60);
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}


var renderCloud = function(ctx,x,y, color){
  ctx.fillStyle = color;
  ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}




window.renderStatistics = function(ctx, names, times){
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0,0,0, 0.3)' );
  renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#fff');
  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = "PT Mono 16px serif";
  ctx.fillText('Ура вы победили!', CLOUD_X , CLOUD_Y + 20 );
  ctx.fillText('Список результатов:', CLOUD_X , CLOUD_Y + 40 );


  for(var i = 0; i<names.length; i++){

    ctx.fillStyle = get_random_color() ;

    if (names[i] == 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }



    ctx.fillText(names[i], CLOUD_X + GAP_TO_BORDER_HORIZONTAL + (COLUMN_WIDTH + GAP_BETWEEN_COLUMN)*i ,CLOUD_Y + GAP_TO_BORDER_VERTICAL + 20 );

    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_TO_BORDER_HORIZONTAL + (COLUMN_WIDTH + GAP_BETWEEN_COLUMN)*i,  CLOUD_Y + GAP_TO_BORDER_VERTICAL - ((times[i]/maxTime)*BAR_HEIGHT)-10 );

    ctx.fillRect(CLOUD_X + GAP_TO_BORDER_HORIZONTAL + (COLUMN_WIDTH + GAP_BETWEEN_COLUMN)*i , CLOUD_Y + GAP_TO_BORDER_VERTICAL, COLUMN_WIDTH, -(times[i]/maxTime)*BAR_HEIGHT);
  }
}
