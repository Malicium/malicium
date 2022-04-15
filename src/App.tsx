import React from 'react'
import CanvasDraw from 'react-canvas-draw'
import './App.scss'

class App extends React.Component {
  static defaultProps = {
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

  state = {
    mode: 'typing'
  }

  switchMode () {
    this.setState({ mode: this.state.mode === 'drawing' ? 'typing' : 'drawing' })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header' />
        <div className='menu'>
          <input type='button' value={this.state.mode} onClick={this.switchMode.bind(this)} />
        </div>

        <div className='canvas-container' hidden={this.state.mode === 'typing'}>
          <CanvasDraw
            {...App.defaultProps}
          />
        </div>

        <div className='editor-container' hidden={this.state.mode === 'drawing'}>
          <textarea className='editor' placeholder='Write something.' />
        </div>
      </div>
    )
  }
}

export default App
