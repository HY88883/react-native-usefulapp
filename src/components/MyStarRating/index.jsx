import React, { PureComponent } from 'react';
import StarRating from 'react-native-star-rating';
/**
 * 星级评分
 */
class MyStarRating extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            rating: undefined,
        };
        this.selectedStar = rating => {
            this.setState({ rating });
            const { selectedStar } = this.props;
            !!selectedStar && selectedStar(rating);
        };
    }
    render() {
        const { rating } = this.state;
        const { disabled, buttonStyle, containerStyle, emptyStar, emptyStarColor, starSize, halfStarEnabled, halfStarColor, halfStar, fullStarColor, fullStar, maxStars, } = this.props;
        return (<StarRating activeOpacity={0.5} animation={'pulse'} buttonStyle={buttonStyle} containerStyle={containerStyle} disabled={disabled} emptyStar={emptyStar} emptyStarColor={emptyStarColor} fullStar={fullStar} halfStar={halfStar} halfStarColor={halfStarColor} halfStarEnabled={halfStarEnabled} maxStars={maxStars} rating={rating} selectedStar={this.selectedStar} starSize={starSize} fullStarColor={fullStarColor}/>);
    }
}
MyStarRating.defaultProps = {
    buttonStyle: {},
    containerStyle: {},
    disabled: false,
    emptyStar: require('./icons/starUnSelected.png'),
    emptyStarColor: 'gray',
    fullStar: require('./icons/starSelected.png'),
    halfStar: require('./icons/starUnSelected.png'),
    halfStarColor: undefined,
    halfStarEnabled: true,
    maxStars: 5,
    selectedStar: undefined,
    starSize: 40,
    fullStarColor: 'orange',
};
export default MyStarRating;
