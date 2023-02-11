//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CryptoList from './CryptoList';
import Pagination from './Pagination';
function App() {

  //const [CoinsData, SetCoinsData] = useState([]);
  const [coinsData, setCoinsData] = useState([]);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const PostPerPage = 8;
  
  useEffect(async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );

        setCoinsData(response.data);
  }, []);
  //console.log(coinsDatas)
  //console.log(CoinsData.data?.[0].image);
  const lastPostIndex = CurrentPage * PostPerPage;
  const firstPostIndex = lastPostIndex - PostPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex)
  console.log(currentPosts)
  return (
    <div className="App">
    <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination totalPosts={coinsData.length} postsPerPage={PostPerPage} setCurrentPage={SetCurrentPage} currentPage={CurrentPage} />
    </div>
  );
}

export default App;
