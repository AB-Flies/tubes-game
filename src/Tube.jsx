import { Piece } from './Piece';
import './Tube.css';
import PropTypes from 'prop-types';

export function Tube({n}) {
  n = Math.max(n, 7)
  let height = 300 / n - 7

  return (
    <div className="tube grid-container" style={{gridTemplateRows: `repeat(${n}, 1fr)`}}>
      <i></i>
      {Array.from({ length: n }).map((_, index) => (
        // <div
        //   key={index}
        //   style={{ width: '95%', height: height + 'px', backgroundColor: 'blue' }}
        // ></div>
        <Piece key={index} height={height}/>
      ))}
      {/* <div style={{width: width + 'px', height: height + 'px', backgroundColor:'blue'}}></div> */}
      {/* <div style={{width: '50px', height: '50px', backgroundColor:'green'}}></div>
      <div style={{width: '50px', height: '50px', backgroundColor:'red'}}></div> */}
    </div>
  );
}

Tube.propTypes = {
  n: PropTypes.number
}

Tube.defaultProps = {
  n: 7
}