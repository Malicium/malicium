import CanvasDraw from 'react-canvas-draw'
import './App.scss'

const defaultProps = {
  className: 'canvas',
  onChange: null,
  loadTimeOffset: 5,
  lazyRadius: 10,
  brushRadius: 1,
  brushColor: '#eee',
  catenaryColor: '#aaa',
  gridColor: 'rgba(150,150,150,0.17)',
  hideGrid: true
  // canvasWidth: 400,
  // canvasHeight: 400,
  // disabled: false,
  // imgSrc: "",
  // saveData: null,
  // immediateLoading: false,
  // hideInterface: false,
  // gridSizeX: 25,
  // gridSizeY: 25,
  // gridLineWidth: 0.5,
  // hideGridX: false,
  // hideGridY: false,
  // enablePanAndZoom: false,
  // mouseZoomFactor: 0.01,
  // zoomExtents: { min: 0.33, max: 3 },
}

function App (): any {
  return (
    <div className='App'>
      <header className='App-header' />
      <CanvasDraw
        {...defaultProps}
      />
      <textarea className='editor' placeholder='Write something.' />
    </div>
  )
}

export default App
