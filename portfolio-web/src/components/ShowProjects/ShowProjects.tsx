import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { StyledShowProjects } from "./styles";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function ShowProjects() {
  const { gitHubInfo } = useContext(PortfolioContext);
  
  return (
    <StyledShowProjects>
       <div className="carousel">
        <Carousel
          containerClass="carousel-container"
          responsive={responsive}
          removeArrowOnDeviceType={['mobile']}
          showDots
          draggable
          infinite
          ssr
        >
          {gitHubInfo.slice(0, gitHubInfo.length).map(({
            githubUrl, displayName, images, summary, website,
          }) => {
            const image = images[0].resolutions.mobile.url;
            return (
              <div className="container grid" key={githubUrl}>
                <h1 className="title"> </h1>
                <div className="image">
                  <img src={image} alt="Imagem do Projeto" />
                </div>
                <div className="text">
                  <h2 className="title">{displayName}</h2>
                  <p>{summary}</p>
                  <div className="buttons">
                    <a className="button" target="_blank" rel="noopener noreferrer" href={website}>
                      <span>Veja o site!</span>
                    </a>
                    <a className="button" target="_blank" rel="noopener noreferrer" href={githubUrl}>
                      <span>Repositório</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>        
     </StyledShowProjects>
  );
}