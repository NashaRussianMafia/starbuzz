$('.box').css(
{
height: '300px',
width: ' 300px',
backgroundColor: 'blue',
position: 'absolute',
}
);
$('.box').click(function() {
  $(".box").fadeOut(2000)
           .fadeIn(1000)
           .animate(
             {
               opacity:0.25,
               height:"toggle"
             }
           )
}
);
