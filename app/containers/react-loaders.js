import React from 'react';
import { Link } from 'react-router';
import ReactLoaders from 'react-loaders/dist/react-loaders';


let LoaderTypes = ["ball-pulse", "ball-grid-pulse", "ball-clip-rotate", "ball-clip-rotate-pulse", "square-spin", "ball-clip-rotate-multiple",
  "ball-pulse-rise", "ball-rotate", "cube-transition", "ball-zig-zag", "ball-zig-zag-deflect", "ball-triangle-path", "ball-scale",
  "line-scale", "line-scale-party", "ball-scale-multiple", "ball-pulse-sync", "ball-beat", "line-scale-pulse-out", "line-scale-pulse-out-rapid",
  "ball-scale-ripple", "ball-scale-ripple-multiple", "ball-spin-fade-loader", "line-spin-fade-loader", "triangle-skew-spin",
  "pacman", "ball-grid-beat", "semi-circle-spin"];

export default React.createClass({

  componentDidMount () {
    ga('send', 'pageview', '/react-loaders');
  },

  render () {
    return (
      <div className="react-loaders fadeIn animated">
        <header>
          <div className="row">
            <div className="small-12 medium-7 large-9 columns">
              <h1>React-Loaders</h1>
              <h2>Delightful and performance-focused pure css loading animations made for <a href="https://facebook.github.io/react/">React</a> around <a href="https://github.com/ConnorAtherton/loaders.css">Loader.css</a></h2>
            </div>
            <div className="small-12 medium-5 large-3 columns">
              <a href="https://github.com/mersocarlin/react-loaders" className="btn right">View on Github</a>
            </div>
          </div>
        </header>

        <div className="loaders">
          {
            LoaderTypes.map((loader) => {
              return(
                <div className="loader">
                  <ReactLoaders type={loader} />
                </div>
              );
            })
          }
        </div>

        <footer>
          <div className="row">
            <div className="small-12 medium-12 large-12">
              <Link to="app" className="btn">
                Back to my website
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});
