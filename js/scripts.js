$(document).ready(main)
  function main() {
    randomNum = Math.round(Math.random() * (8 - 1) + 1);
      quotes(randomNum);
  };
function quotes(randomNum) {
  switch(randomNum) {
    case 1:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>You are every reason, every hope and every dream I've ever had.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>Nicholas Sparks(The Notebook)</a></cite></blockquote>");
      break;
    case 2:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>I love you and that's the beginning and end of everything.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>F. Scott Fitzgerald</a></cite></blockquote>");
      break;
	case 3:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>I seem to have loved you in numberless forms, numberless times, in life after life, in age after age forever</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>Rabindranath Tagore</a></cite></blockquote>");
      break;
    case 4:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>I love you not only for what you are, but for what I am when I am with you.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>Roy Croft</a></cite></blockquote>");
	  break;
	case 5:/* come back and put this on multiple lines*/
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>If kisses were stars, I&apos;d give you the sky.</p><p>If touches were tears, I would cry.</p><p>If love was water, I&apos;d give you the sea.</p><p>and be with you for all eternity.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>love quotes for her</a></cite></blockquote>");
      break;
    case 6:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>Within you, I lose myself.</p>Without you, I find myself wanting to be lost again.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>Love quotes for her</a></cite></blockquote>");
      break;
    case 7:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote><p>To the world, you may be one person, but to one person you are the world.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>Bill Wilson</a></cite></blockquote>");
      break;
    case 8:
      $("blockquote").remove();
      $(".Quotes").append("<blockquote>If I could be anything in the world I would want to be a teardrop beacause I would be born in your eyes, live on your cheeks, and die on your lips.</p><cite><a href='http://lovequotesforher.facts.co/sweetlovequotesforher.php'>love quotes for her</a></cite></blockquote>");
      break;
    default:
	  $("blockquote").remove();
      $(".Quotes").append("<blockquote>What no quote?</blockquote>");
  }
}