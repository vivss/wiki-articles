import React, { useEffect, useState } from 'react';
import wikiApi from './api/wiki';
import { IArticleItem } from './interfaces';

function App() {
  const [responseData, setResponseData] = useState<IArticleItem[]>([]);

  const getArticles = async () => {
    const date = new Date(2015, 10, 10);
    let data = await wikiApi.get(date).then((response) => {
      console.log(response);
      return response.data.items[0].articles[0].article;
    });
    setResponseData(data);
  };

  useEffect(() => {
    getArticles();
  });

  return <div className="App">{responseData}</div>;
}

export default App;
