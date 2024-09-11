import './Piece.css'
import PropTypes from 'prop-types'

export function Piece({height}) {
  console.log(height)
  return <div className="piece" style={
    { 
      height: height + 'px', 
      borderRadius: `${height * 0.25}px` 
    }
  }></div>
}

Piece.propTypes = {
  height: PropTypes.number.isRequired
}
