import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Kevin Liptak",
          "title": "Biden aims to assert American leadership abroad at UN climate summit and G20 - CNN",
          "description": "It's a story President Joe Biden tells at nearly every opportunity: last year, meeting his new counterparts at his first international summit, he proudly informed them, \"America is back.\"",
          "url": "https://www.cnn.com/2022/11/10/politics/biden-foreign-trip-north-africa-asia-cop27-g20/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221110113724-joe-biden-110922.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-11-11T04:20:00Z",
          "content": "Sharm El Sheikh, EgyptCNN\r\n  — \r\nIts a story President Joe Biden tells at nearly every opportunity: last year, meeting his new counterparts at his first international summit, he proudly informed them… [+8226 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "Cody Benjamin",
          "title": "Falcons vs. Panthers score: Carolina swallows up Marcus Mariota to down Atlanta in ugly NFC South contest - CBS Sports",
          "description": "Could a QB change be on the way in Atlanta?",
          "url": "https://www.cbssports.com/nfl/news/falcons-vs-panthers-score-takeaways-carolina-swallows-up-marcus-mariota-atlanta-in-ugly-nfc-south-contest/live/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/11/11/edbc50ed-280a-40eb-9153-c6419d0feacc/thumbnail/1200x675/8f14c4162e6a76f110cec5e11b1b5dfb/donta-foreman-2-usatsi.jpg",
          "publishedAt": "2022-11-11T04:16:00Z",
          "content": "The Falcons came into Charlotte on Thursday night looking to retake the NFC South lead. Instead, they left dampened and defeated, not only by the rainy remnants of Hurricane Nicole, but their rival P… [+3643 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Control of U.S. Congress hangs in balance as states labor to count ballots - Reuters",
          "description": "Two days after Americans went to the polls, the political world remained on tenterhooks on Thursday, with both chambers of the U.S. Congress up for grabs as election officials painstakingly tallied hundreds of thousands of votes in a process that could take d…",
          "url": "https://www.reuters.com/world/us/republicans-close-us-house-majority-senate-still-up-grabs-2022-11-10/",
          "urlToImage": "https://www.reuters.com/resizer/SZ3HCteHIi_z1FgiOfFPXNod2o0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T2F6JRJOYNOZPF5S45SUVSJILM.jpg",
          "publishedAt": "2022-11-11T03:53:00Z",
          "content": "PHOENIX, Nov 10 (Reuters) - Two days after Americans went to the polls, the political world remained on tenterhooks on Thursday, with both chambers of the U.S. Congress up for grabs as election offic… [+4674 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "Jill Colvin",
          "title": "Trump faces blame from GOP as he moves forward with WH bid - The Associated Press - en Español",
          "description": "WASHINGTON (AP) — Republicans intensified their public criticism  of former President Donald Trump  on Thursday, with some saying it was time for the party to move on after an unexpectedly poor showing  in the midterm elections, even as he prepared to launch …",
          "url": "https://apnews.com/article/2022-midterm-elections-donald-trump-00c770068d8b82f165a9f4871eee983b",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/66bf5dfc2dc445ed8840b26ee9008833/3000.jpeg",
          "publishedAt": "2022-11-11T03:49:49Z",
          "content": "WASHINGTON (AP) Republicans intensified their public criticism of former President Donald Trump on Thursday, with some saying it was time for the party to move on after an unexpectedly poor showing i… [+6700 chars]"
        }
    ];

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className='row'>
            {
                this.articles.map((article)=>{
                    return (
                      <div className="col-md-4 my-2" key={article.url }>
                        <NewsItem
                          title={article.title}
                          description={article.description}
                          imgUrl={article.urlToImage}
                          url={article.url}
                        />
                      </div>
                    );
                })
            }
            
        </div>
      </div>
    )
  }
}

export default News