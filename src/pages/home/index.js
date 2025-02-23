import React, { useState, useEffect } from 'react';
import { getApps } from '../../services/api';
import AppCard from '../../components/appcard';
import Modal from '../../components/modal';
import SearchBar from '../../components/searchbar';
import { HomeBox } from './styles';

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedApp, setSelectedApp] = useState(null);
  const [viewedApps, setViewedApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getApps(page);
      setApps(data);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1); 
  };

  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAppClick = (app) => {
    setViewedApps(prev => [app, ...prev.filter(a => a.id !== app.id)].slice(0, 3));
    setSelectedApp(app);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : (
        <HomeBox className="app-list">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} onClick={() => handleAppClick(app)} />
          ))}
        </HomeBox>
      )}
      {selectedApp && (
        <Modal app={selectedApp} viewedApps={viewedApps} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
};

export default Home;
