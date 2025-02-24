import React, { useState, useEffect } from 'react';
import { getApps } from '../../services/api';
import AppCard from '../../components/appcard';
import Modal from '../../components/modal';
import SearchBar from '../../components/searchbar';
import { HomeBox, HomeContainer } from './styles';

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedApp, setSelectedApp] = useState(null);
  const [viewedApps, setViewedApps] = useState([]);

  const pageSize = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getApps();
      setApps(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1); 
  };


  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const startIndex = (page - 1) * pageSize; 
  const endIndex = startIndex + pageSize;
  const displayedApps = filteredApps.slice(startIndex, endIndex);

  const hasNextPage = endIndex < filteredApps.length;

  const hasPrevPage = page > 1;

  const handleAppClick = (app) => {
    setViewedApps(prev => [...prev, app].slice(-4));    
    setSelectedApp(app);
  };  

  return (
    <HomeContainer>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <HomeBox>
            {displayedApps.map(app => (
              <AppCard key={app.id} app={app} onClick={() => handleAppClick(app)} />
            ))}
          </HomeBox>

          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={!hasPrevPage}
            >
              Anterior
            </button>
            <span style={{ margin: '0 10px' }}>Página {page}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!hasNextPage}
            >
              Próxima
            </button>
          </div>
        </>
      )}

      {selectedApp && (
        <Modal
          app={selectedApp}
          viewedApps={viewedApps.slice(0, 3)}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
