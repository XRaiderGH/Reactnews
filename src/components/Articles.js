import React,{useEffect, useState} from 'react';

const Article = () => {
    const apiKey = 'c09496cc7ea745a2a5b49032d546faf8';
    // let date = new Date();
    // let date2 = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    // console.log(date2);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    console.log(today);

    const[articles, setArticles] = useState([]);
    console.log(articles);

    useEffect( () => {
        getArticles();
    }, []);


    const getArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&from=2019-05-01&to=${today}&sortBy=publishedAt&apiKey=${apiKey}`);
        const data = await response.json();
        setArticles(data.articles);
    };


    return(
        <div className="articles">
            {articles.map(article => (
                <div className='article' key={article.url}>
                    <img src={article.urlToImage} alt="Article"/>
                    <h1>{article.title}</h1>
                    <p className="date">{article.publishedAt.slice(0, -10)}</p>
                    <article>{article.content}</article>
                    <br/>
                    <div className='articleFooter'>
                        <p className='articleAuthor'>{article.author + " - " + article.source.id}</p>
                        <a href={article.url} target='_blank' rel="noopener noreferrer">Read more</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Article;