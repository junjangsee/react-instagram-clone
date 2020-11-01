import React from 'react';

class Carousel extends React.Component {
  state = {
    startIndex: this.props.startIndex,
    images: this.props.images,
    carousel: null,
    translate3d: 'translate3d(0, 0, 0)',
    onPrev: this.onPrev.bind(this),
    onNext: this.onNext.bind(this),
  };

  componentDidMount() {
    this.setState((state) => {
      return (state.carousel = document.querySelector('.carousel'));
    });
  }

  onPrev() {
    if (this.state.startIndex === 0) return;

    this.setState((state) => {
      return {
        ...state,
        startIndex: (state.startIndex -= 1),
        translate3d: `translate3d(-${614 * state.startIndex}px, 0, 0)`,
      };
    });
  }

  onNext() {
    if (this.state.startIndex === this.state.images.length - 1) return;

    this.setState((state) => {
      return {
        ...state,
        startIndex: (state.startIndex += 1),
        translate3d: `translate3d(-${614 * state.startIndex}px, 0, 0)`,
      };
    });
  }

  render() {
    return (
      <>
        <div className='carousel-wrapper'>
          <div
            className='carousel'
            style={{ transform: this.state.translate3d }}>
            {this.state.images.map((image, index) => (
              <img key={index} src={image.src} />
            ))}
          </div>
          <button className='prev' type='button' onClick={this.state.onPrev}>
            <div className='prev-image'></div>
          </button>
          <button className='next' type='button' onClick={this.state.onNext}>
            <div className='next-image'></div>
          </button>
        </div>
      </>
    );
  }
}

export default Carousel;
