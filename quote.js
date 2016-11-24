  var quotes = [' To hell with circumstances; I create opportunities.  ',
  ' Mistakes are always forgivable, if one has the courage to admit them. ',
  ' Obey the principles without being bound by them. ',
  ' If you spend too much time thinking about a thing, you\'ll never get it done. ' ,
  ' A wise man can learn more from a foolish question than a fool can learn from a wise answer. ' ,
  ' The key to immortality is first living a life worth remembering. ' ,
  ' A quick temper will make a fool of you soon enough. ', 
  ' Take things as they are. Punch when you have to punch. Kick when you have to kick. ',
  ' Take no thought of who is right or wrong or who is better than. Be not for or against. ',
  ' As you think, so shall you become. ',
  ' Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind. ',  
  ' The key to immortality is first living a life worth remembering. ' ,
  ' To know oneself is to study oneself in action with another person. ']

  var author = 'Bruce Lee';

  var fontType =['Shadows Into Light', 'PT Mono', 'Paytone One','Abril Fatface','Lobster','Sail']

  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  function randomQuotes() {
    var randomNumberQuotes = Math.floor(Math.random() * (quotes.length));
    var randomFonts = Math.floor(Math.random() * (fontType.length));
    var randomColors = Math.floor(Math.random() * (colors.length));


    ranQuotes = document.getElementById('quoteDisplay').innerHTML = '" ' +quotes[randomNumberQuotes] + ' "';
    ranAuthor = document.getElementById('authorDisplay').innerHTML = "-  " + author;
    ranCol = document.getElementById('quoteDisplay').style.color = colors[randomColors];
    document.getElementById('quoteDisplay').style.fontFamily = fontType[randomFonts];
    document.getElementById('authorDisplay').style.fontFamily = fontType[randomFonts];

   

      $("#quoteDisplay").animate({
          opacity : 0.5 } , 1000 ,
          function (){
            $(this).animate({
              opacity : 1 } , 1000);
            $(this).css({ 'color': 'ranCol', 'font-size': '150%' }, 1000);
            $("quoteDisplay").text(ranQuotes);
      });

      $("#authorDisplay").animate({
        opacity:0.5 }, 1000 ,
        function(){
          $(this).animate({
            opacity: 1 } , 1000);
          $(this).css({ 'font-size': '150%' }, 1000);
          $("#authorDisplay").text(ranAuthor);
      });


  $(".logo").animate({
    opacity: 0.5} , 500,
    function(){
      $(this).animate({
    opacity : 1} , 500); 
  });

  }



  function tweet(){
    var tweetQuote = ranQuotes +" "+ ranAuthor;
         //window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(tweetQuote));
         window.open('https://twitter.com/intent/tweet' + '?hashtags= freecodecamp&text='   + encodeURIComponent(tweetQuote));

  }