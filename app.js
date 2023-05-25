function generator(){
    var quotes = {
        "- Aothor1" : ' "123456abcd1" ',
        "- Aothor2" : ' "123456abcd2" ',
        "- Aothor3" : ' "123456abcd3" ',
        "- Aothor4" : ' "123456abcd4" ',
        "- Aothor5" : ' "123456abcd5" ',
        "- Aothor6" : ' "123456abcd6" ',
        "- Aothor7" : ' "123456abcd7" ',
    }
    var authors = Object.keys(quotes);
    // console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)]
    // console.log(author);
    var quote = quotes[author];
    // console.log(quote);
    
    document.getElementById("quoteText").innerHTML = quote;
    document.getElementById("authorNam").innerHTML = author;
}