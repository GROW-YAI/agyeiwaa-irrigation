import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch data from Google Sheets API.
 * @param {string} tabName - The name of the sheet/tab.
 * @param {string} range - The cell range within the tab.
 * @returns {Array} - An array containing the fetched data and any error state.
 */
const useGoogleSheetData = (tabName, range) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tabName || !range) return; // Avoid making requests if parameters are missing

    const fetchData = async () => {
      const sheetID = process.env.REACT_APP_GOOGLE_SHEET_ID;
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${tabName}!${range}?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        if (result.values) {
          setData(result.values);
        } else {
          setError('No data found.');
        }
      } catch (err) {
        setError('Error fetching data.');
        console.error(err);
      }
    };

    fetchData();
  }, [tabName, range]);

  return [data, error];
};

export default useGoogleSheetData;
