import { useContext, useEffect } from 'react';
import { PortfolioContext } from '../../contexts/PortfolioContext';
import { StyledProjects } from './styles';
import { ShowProjects } from '../../components/ShowProjects/ShowProjects';
import axios from 'axios';

export function Projects() {
  const { isFetching, setIsFetching, setGitHubInfo } =
    useContext(PortfolioContext);

  useEffect(() => {
    setIsFetching(true);
    const url = 'https://gitconnected.com/v1/portfolio/amosrodrigues';
    const fetchData = async () => {
      const response = await axios.get(url).catch((err) => err.response);
      if (response && response.status === 200) {
        setGitHubInfo(response.data.projects);
        setIsFetching(false);
      } else {
        throw new Error('Url not found');
      }
    };
    fetchData();
  }, [setGitHubInfo, setIsFetching]); // <-- should error and offer autofix to [props.name]

  return (
    <StyledProjects>
      <div className="section">
        <h1 className="title">MEUS PROJETOS</h1>
        {isFetching ? (
          <>
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <ShowProjects />
        )}
      </div>
    </StyledProjects>
  );
}
