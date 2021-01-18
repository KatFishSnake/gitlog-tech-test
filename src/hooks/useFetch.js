import { useState, useEffect } from "react";
import { filter } from "lodash";

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// For now just a mock
const useFetch = (mockData, params, limit = 2000) => {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        await timeout(limit);

        let data = mockData;
        if (params && params.query) {
          // Might not be the place for it, but mimics filtering backend
          data = filter(mockData, (item) => {
            const keysToSearch = [
              ...item.refs,
              item.hash,
              item.subject,
              item.author.name,
              item.author.timestamp,
            ].join();
            return keysToSearch
              .toLowerCase()
              .includes(params.query.toLowerCase().trim());
          });
        }
        setData(data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params, mockData, limit]);
  return { loading, data };
};

export default useFetch;
