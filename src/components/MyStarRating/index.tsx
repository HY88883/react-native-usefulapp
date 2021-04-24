import React, {PureComponent} from 'react';
import StarRating from 'react-native-star-rating';
import {Image, ImageSourcePropType, StyleProp, ViewProps} from 'react-native';

interface IMyStarRating {
  buttonStyle?: StyleProp<ViewProps>;
  containerStyle?: StyleProp<ViewProps>;
  disabled?: boolean;
  emptyStar?: ImageSourcePropType | string;
  emptyStarColor?: string;
  fullStar?: ImageSourcePropType | string;
  halfStar?: ImageSourcePropType | string;
  halfStarColor?: string;
  halfStarEnabled?: boolean;
  maxStars?: number;
  selectedStar?: (rating: number) => void;
  starSize?: number;
  fullStarColor?: string;
}

interface IMyStarRatingState {
  rating?: number;
}

/**
 * 星级评分
 */
class MyStarRating extends PureComponent<IMyStarRating, IMyStarRatingState> {
  static defaultProps = {
    emptyStar: require('./icons/starUnSelected.png'),
    emptyStarColor: 'gray',
    fullStar: require('./icons/starSelected.png'),
    halfStar: require('./icons/starUnSelected.png'),
    halfStarEnabled: true,
    maxStars: 5,
    starSize: 40,
    fullStarColor: 'orange',
  };

  state = {
    rating: undefined,
  };

  selectedStar = (rating: number) => {
    this.setState({rating});
    const {selectedStar} = this.props;
    !!selectedStar && selectedStar(rating);
  };

  render() {
    const {rating} = this.state;
    const {
      disabled,
      buttonStyle,
      containerStyle,
      emptyStar,
      emptyStarColor,
      starSize,
      halfStarEnabled,
      halfStarColor,
      halfStar,
      fullStarColor,
      fullStar,
      maxStars,
    } = this.props;
    return (
      <StarRating
        activeOpacity={0.5}
        animation={'pulse'}
        buttonStyle={buttonStyle}
        containerStyle={containerStyle}
        disabled={disabled}
        emptyStar={emptyStar}
        emptyStarColor={emptyStarColor}
        fullStar={fullStar}
        halfStar={halfStar}
        halfStarColor={halfStarColor}
        halfStarEnabled={halfStarEnabled}
        maxStars={maxStars}
        rating={rating}
        selectedStar={this.selectedStar}
        starSize={starSize}
        fullStarColor={fullStarColor}
      />
    );
  }
}

export default MyStarRating;
