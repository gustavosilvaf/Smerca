import React, { useState, useEffect } from 'react';
import api from '../../../Services/api';
import './styles.scss';

const StoresByTag = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tagsApiResponse = await api.get('tag');
      const { tags } = tagsApiResponse.data;
      const tagsWithMarkets = await Promise.all(
        tags.map(async (tag) => {
          const markets = await api.get(`market?tags=${tag.content}`);
          return { ...tag, markets };
        })
      );

      setStores(tagsWithMarkets);
    };

    fetchData();
  }, []);

  return (
    <div className="StoresByTag">
      {stores.map((storeTag) => (
        <div key={storeTag.id} className="StoresByTag__tag-container">
          <h3 className="StoresByTag__tag-name">{storeTag.content}</h3>
          <div className="StoresByTag__stores-display">
            {storeTag.markets.data.markets.map((store) => (
              <div key={store.id} className="StoresByTag__store-container">
                <div className="StoresByTag__store-image-crop">
                  <img
                    className="StoresByTag__store-image"
                    src={store.imageUrl}
                    alt={store.name}
                  />
                </div>
                <h3 className="StoresByTag__store-name">{store.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoresByTag;
