var React = require("react");

var BallPulse = require("react-loaders/dist/components/ball-pulse");
var BallGridPulse = require("react-loaders/dist/components/ball-grid-pulse");
var BallClipRotate = require("react-loaders/dist/components/ball-clip-rotate");
var BallClipRotatePulse = require("react-loaders/dist/components/ball-clip-rotate-pulse");
var SquareSpin = require("react-loaders/dist/components/square-spin");
var BallClipRotateMultiple = require("react-loaders/dist/components/ball-clip-rotate-multiple");
var BallPulseRise = require("react-loaders/dist/components/ball-pulse-rise");
var BallRotate = require("react-loaders/dist/components/ball-rotate");
var CubeTransition = require("react-loaders/dist/components/cube-transition");
var BallZigZag = require("react-loaders/dist/components/ball-zig-zag");
var BallZigZagDeflect = require("react-loaders/dist/components/ball-zig-zag-deflect");
var BallTrianglePath = require("react-loaders/dist/components/ball-triangle-path");
var BallScale = require("react-loaders/dist/components/ball-scale");
var LineScale = require("react-loaders/dist/components/line-scale");
var LineScaleParty = require("react-loaders/dist/components/line-scale-party");
var BallScaleMultiple = require("react-loaders/dist/components/ball-scale-multiple");
var BallPulseSync = require("react-loaders/dist/components/ball-pulse-sync");
var BallBeat = require("react-loaders/dist/components/ball-beat");
var LineScalePulseOut = require("react-loaders/dist/components/line-scale-pulse-out");
var LineScalePulseOutRapid = require("react-loaders/dist/components/line-scale-pulse-out-rapid");
var BallScaleRipple = require("react-loaders/dist/components/ball-scale-ripple");
var BallScaleRippleMultiple = require("react-loaders/dist/components/ball-scale-ripple-multiple");
var BallSpinFadeLoader = require("react-loaders/dist/components/ball-spin-fade-loader");
var LineSpinFadeLoader = require("react-loaders/dist/components/line-spin-fade-loader");
var TriangleSkewSpin = require("react-loaders/dist/components/triangle-skew-spin");
var Pacman = require("react-loaders/dist/components/pacman");
var BallGridBeat = require("react-loaders/dist/components/ball-grid-beat");
var SemiCircleSpin = require("react-loaders/dist/components/semi-circle-spin");


require("react-loaders/dist/styles/loaders.css");
require("../styles/containers/react-loaders.scss");


module.exports = React.createClass({
  render: function() {
    return (
      <div className="react-loaders">
        <header>
          <div className="left">
            <h1>React-Loaders</h1>
            <h2>Delightful and performance-focused pure css loading animations made for <a href="https://facebook.github.io/react/">React</a> around <a href="https://github.com/ConnorAtherton/loaders.css">Loader.css</a></h2>
          </div>
          <div className="right">
            <a href="https://github.com/mersocarlin/react-loaders" className="btn right">View on Github</a>
          </div>
        </header>

        <div className="loaders">
          <div className="loader">
            <BallPulse />
          </div>

          <div className="loader">
            <BallGridPulse />
          </div>

          <div className="loader">
            <BallClipRotate />
          </div>

          <div className="loader">
            <BallClipRotatePulse />
          </div>

          <div className="loader">
            <SquareSpin />
          </div>

          <div className="loader">
            <BallClipRotateMultiple />
          </div>

          <div className="loader">
            <BallPulseRise />
          </div>

          <div className="loader">
            <BallRotate />
          </div>

          <div className="loader">
            <CubeTransition />
          </div>

          <div className="loader">
            <BallZigZag />
          </div>

          <div className="loader">
            <BallZigZagDeflect />
          </div>

          <div className="loader">
            <BallTrianglePath />
          </div>

          <div className="loader">
            <BallScale />
          </div>

          <div className="loader">
            <LineScale />
          </div>

          <div className="loader">
            <LineScaleParty />
          </div>

          <div className="loader">
            <BallScaleMultiple />
          </div>

          <div className="loader">
            <BallPulseSync />
          </div>

          <div className="loader">
            <BallBeat />
          </div>

          <div className="loader">
            <LineScalePulseOut />
          </div>

          <div className="loader">
            <LineScalePulseOutRapid />
          </div>

          <div className="loader">
            <BallScaleRipple />
          </div>

          <div className="loader">
            <BallScaleRippleMultiple />
          </div>

          <div className="loader">
            <BallSpinFadeLoader />
          </div>

          <div className="loader">
            <LineSpinFadeLoader />
          </div>

          <div className="loader">
            <TriangleSkewSpin />
          </div>

          <div className="loader">
            <Pacman />
          </div>

          <div className="loader">
            <BallGridBeat />
          </div>

          <div className="loader">
            <SemiCircleSpin />
          </div>
        </div>
      </div>
    );
  }
});
