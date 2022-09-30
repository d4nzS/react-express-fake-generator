import { useEffect, useRef, useState } from 'react';

import MainForm from './components/MainForm';
import MainTable from './components/MainTable';
import { axiosData, axiosCSV } from './helpers/axious-helper';
import useScroller from './hooks/use-scroller';


const App = () => {
  const [region, setRegion] = useState('ua');
  const [seed, setSeed] = useState(0);
  const [errors, setErrors] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosData({ isFirstFetching: true, region, seed, errors, limit: 20, page: 0 });

      setPage(2);
      setData(response.data);
    };

    fetchData();
  }, [region, seed, errors]);

  const submitFormHandler = async ({ region, seed, errors }) => {
    setRegion(region);
    setSeed(seed);
    setErrors(errors);
  };

  const exportCSVHandler = async () => {
    if (!data.length) {
      return;
    }
    const response = await axiosCSV({
      region,
      seed,
      count: page * 10,
    });

    const el = document.createElement('a');
    el.href = 'data:text/csv;charset=utf-8,' + encodeURI(response.data);
    el.target = "_blank";
    el.download = 'data.csv';
    el.click();
  };

  const parentRef = useRef();
  const childRef = useRef();

  const getDataOnScroll = async () => {
    if (data.length === 0) {
      return;
    }
    const response = await axiosData({ region, seed, errors, limit: 10, page });
    if (response.data) {
      setPage(page + 1);
      const responseData = response.data;
      setData([...data, ...responseData]);
    }
  };

  useScroller(childRef, getDataOnScroll);

  return (
    <div ref={parentRef}>
      <MainForm onSubmitForm={submitFormHandler} onExportCSV={exportCSVHandler}/>
      <MainTable data={data}/>
      <div ref={childRef} style={{ height: 100 }}/>
    </div>
  );
}

export default App;
