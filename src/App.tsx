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
    catenaryColor: '#aaa',
    gridColor: 'rgba(150,150,150,0.17)',
    hideGrid: true
  }

  state = {
    mode: 'typing'
  }

  switchMode (): void {
    this.setState({ mode: this.state.mode === 'drawing' ? 'typing' : 'drawing' })
  }

  render (): JSX.Element {
    return (
      <div className='App'>
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
