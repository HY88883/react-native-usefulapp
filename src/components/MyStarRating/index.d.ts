import { PureComponent } from 'react';
import { ImageSourcePropType, StyleProp, ViewProps } from 'react-native';
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
    rating: number;
}
/**
 * 星级评分
 */
declare class MyStarRating extends PureComponent<IMyStarRating, IMyStarRatingState> {
    static defaultProps: {
        buttonStyle: {};
        containerStyle: {};
        disabled: boolean;
        emptyStar: any;
        emptyStarColor: string;
        fullStar: any;
        halfStar: any;
        halfStarColor: undefined;
        halfStarEnabled: boolean;
        maxStars: number;
        selectedStar: undefined;
        starSize: number;
        fullStarColor: string;
    };
    state: {
        rating: undefined;
    };
    selectedStar: (rating: any) => void;
    render(): any;
}
export default MyStarRating;
