import { PureComponent } from 'react';
interface ICarrousel {
    data: ReadonlyArray<any>;
    dotsLength: number;
}
interface ICarrouselState {
    activeSlide: number;
}
/**
 * 轮播图
 */
declare class Carrousel extends PureComponent<ICarrousel, ICarrouselState> {
    state: {
        activeSlide: number;
    };
    onSnapToItem: (index: number) => void;
    renderItem: ({ item }: {
        item: string;
    }, parallaxProps?: any) => any;
    get pagination(): any;
    render(): any;
}
export default Carrousel;
