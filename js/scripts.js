const Quotes = [{
      quote: "You are every reason, every hope and every dream I've ever had.",
      author : "Nicholas Sparks(The Notebook)"
    },{
      quote : "I love you and that's the beginning and end of everything.",
      author : "F. Scott Fitzgerald"
    },{
      quote : "I seem to have loved you in numberless forms, numberless times, in life after life, in age after age forever",
      author :"Rabindranath Tagore"
    },{
      quote : "I love you not only for what you are, but for what I am when I am with you.",
      author : "Roy Croft"
    },{
      quote : "If kisses were stars, I&apos;d give you the sky. If touches were tears, I would cry. If love was water, I&apos;d give you the sea. and be with you for all eternity.",
      author :"unknown"
    },{
      quote : "Within you, I lose myself. Without you, I find myself wanting to be lost again.",
      author : "unknown"
    },{
      quote : "To the world, you may be one person, but to one person you are the world.",
      author :"Bill Wilson"
    },{
      quote : "If I could be anything in the world I would want to be a teardrop beacause I would be born in your eyes, live on your cheeks, and die on your lips.",
      author : "unknown"
}];

$(document).ready(main);
/** generates a random number.
 *  
 * @return {number}
 */
function getRandomNumber(){
  return Math.round(Math.random() * (7 - 1) + 1);
}

/** Displays content to the page
 */
function main() {
  const url = "https://twitter.com/intent/tweet?text=";
  let randomNum = getRandomNumber();
  $("blockquote").remove();
  $(".Quotes").append("<blockquote>"+Quotes[randomNum].quote+"<cite><p>"+Quotes[randomNum].author+"</p></cite></blockquote>");
  $(".twitter").attr("href", url + Quotes[randomNum].quote+Quotes[randomNum].quote);
}