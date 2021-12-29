import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Animated from 'animated/lib/targets/react-dom';

const styles = {
  root: {
    background: '#2196f3',
    padding: '0 50px',
  },
  slide: {
    padding: '24px 16px',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  img: {
    width: 280,
    height: 280,
    display: 'block',
    marginBottom: 16,
  },
};

const albums = [
  {
    name: 'DASHBOARD DESIGN FOR WEB APP',
    src: 'https://i.pinimg.com/originals/b3/44/aa/b344aa836c6536b9324bbc4e449e0697.jpg',
  },
  {
    name: 'WEBSITE LANDING PAGE',
    src: 'https://uicookies.com/wp-content/uploads/2019/08/graphic-design-website-templates-featured-image.jpg',
  },
  {
    name: 'WEBSITE INTERFACE',
    src: 'https://global-uploads.webflow.com/5f16d69f1760cdba99c3ce6e/5faa6fd75ee34c42c1fd3b21_1UKYKxNvFDtSRqQl8OBEZZesi5tcXkKSPtN6jCOogbARdWYd7dtd-ZOzswvHZtJ-lD9R-2bI_ZTXEyMQIZSnaipk8Dy33Yb4WyFuvQ0EteVEZJ5DN72LWlS68nir-ayFzGWkkEYM.png',
  },
  {
    name: 'E-COMMERCE ',
    src: 'https://assets.materialup.com/uploads/66a6dc11-b9b3-498e-a9ae-9532c9596aeb/preview.png',
  },
  {
    name: 'DASHBOARD DESIGN FOR WEB APP',
    src: 'https://i.pinimg.com/originals/b3/44/aa/b344aa836c6536b9324bbc4e449e0697.jpg',
  },
  {
    name: 'WEBSITE LANDING PAGE',
    src: 'https://uicookies.com/wp-content/uploads/2019/08/graphic-design-website-templates-featured-image.jpg',
  },
  {
    name: 'WEBSITE INTERFACE',
    src: 'https://global-uploads.webflow.com/5f16d69f1760cdba99c3ce6e/5faa6fd75ee34c42c1fd3b21_1UKYKxNvFDtSRqQl8OBEZZesi5tcXkKSPtN6jCOogbARdWYd7dtd-ZOzswvHZtJ-lD9R-2bI_ZTXEyMQIZSnaipk8Dy33Yb4WyFuvQ0EteVEZJ5DN72LWlS68nir-ayFzGWkkEYM.png',
  },
  {
    name: 'E-COMMERCE ',
    src: 'https://assets.materialup.com/uploads/66a6dc11-b9b3-498e-a9ae-9532c9596aeb/preview.png',
  },
];

class Client extends React.Component {
  state = {
    index: 0,
    position: new Animated.Value(0),
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };

  handleSwitch = (index, type) => {
    if (type === 'end') {
      Animated.spring(this.state.position, { toValue: index }).start();
      return;
    }
    this.state.position.setValue(index);
  };

  render() {
    const { index, position } = this.state;

    return (
      <SwipeableViews
        index={index}
        style={styles.root}
        onChangeIndex={this.handleChangeIndex}
        onSwitching={this.handleSwitch}
      >
        {albums.map((album, currentIndex) => {
          const inputRange = albums.map((_, i) => i);
          const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.7;
            }),
          });
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.3;
            }),
          });
          const translateX = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return (100 / 2) * (i - currentIndex);
            }),
          });

          return (
            <Animated.div
              key={String(currentIndex)}
              style={Object.assign(
                {
                  opacity,
                  transform: [{ scale }, { translateX }],
                },
                styles.slide,
              )}
            >
              <img style={styles.img} src={album.src} alt="cover" />
              {album.name}
            </Animated.div>
          );
        })}
      </SwipeableViews>
    );
  }
}

export default Client;
