import React, { PureComponent } from 'react';
import SnapCarousel, { Pagination, ParallaxImage, } from 'react-native-snap-carousel';
import { scaleSizeH, scaleSizeW, viewportWidth } from '../../utils/index';
import { StyleSheet, View } from 'react-native';
const sliderWidth = viewportWidth;
const itemWidth = scaleSizeW(351);
const sideHeight = scaleSizeH(100);
/**
 * 轮播图
 */
class Carrousel extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            activeSlide: 0,
        };
        this.onSnapToItem = (index) => {
            this.setState({ activeSlide: index });
        };
        this.renderItem = ({ item }, parallaxProps) => {
            return (<ParallaxImage source={{ uri: item }} style={styles.image} containerStyle={styles.imageContainer} {...parallaxProps}/>);
        };
    }
    get pagination() {
        const { activeSlide } = this.state;
        const { dotsLength } = this.props;
        return (<View style={styles.paginationWrapper}>
                <Pagination containerStyle={styles.paginationContainer} dotContainerStyle={styles.dotContainer} dotStyle={styles.dot} dotsLength={dotsLength} activeDotIndex={activeSlide}/>
            </View>);
    }
    render() {
        const { data } = this.props;
        return (<View>
                <SnapCarousel data={data} renderItem={this.renderItem} sliderWidth={sliderWidth} itemWidth={itemWidth} onSnapToItem={this.onSnapToItem} hasParallaxImages loop autoplay/>
                {this.pagination}
            </View>);
    }
}
const styles = StyleSheet.create({
    imageContainer: {
        width: itemWidth,
        height: sideHeight,
        borderRadius: scaleSizeW(8),
    },
    image: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { resizeMode: 'cover' }),
    paginationWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationContainer: {
        top: -scaleSizeH(20),
        backgroundColor: 'rgba(0,0,0,0.35)',
        paddingHorizontal: scaleSizeW(3),
        paddingVertical: scaleSizeH(4),
        borderRadius: scaleSizeW(8),
    },
    dotContainer: {
        marginHorizontal: scaleSizeW(6),
    },
    dot: {
        width: scaleSizeW(6),
        height: scaleSizeW(6),
        borderRadius: scaleSizeW(3),
        backgroundColor: 'rgba(255,255,255,0.92)',
    },
});
export default Carrousel;
