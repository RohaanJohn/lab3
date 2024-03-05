import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SportsNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=66f721afb58745d382e53074523aaef6`);
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching sports news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-content">
            <h2>Sports News</h2>
            <ul className="news-list">
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SportsNews;
