import { PureComponent } from 'react';
import { ListRenderItem } from 'react-native';
interface IPageParams {
    current: number;
    size: number;
}
interface IListPagination {
    refresh: (func: (data: any) => void, pageParams?: {}) => void;
    pageParams?: IPageParams;
    renderItem: ListRenderItem<any> | null | undefined;
    keyExtractor?: (item: any, index: number) => string;
}
interface IListPaginationState {
    list: Array<any>;
    isFirstLoading: boolean;
    isFetchLoading: boolean;
}
declare class ListPagination extends PureComponent<IListPagination, IListPaginationState> {
    static defaultProps: {
        pageParams: {
            current: number;
            size: number;
        };
        keyExtractor: (item: any, index: any) => any;
    };
    state: {
        isFirstLoading: boolean;
        isFetchLoading: boolean;
        list: never[];
    };
    pagination: {
        total: number;
        size: number;
        current: number;
        pages: number;
    };
    pageParams: any;
    isNew: boolean;
    callBack: (data: {
        pagination: {
            total: number;
            size: number;
            current: number;
            pages: number;
        };
        list: any;
    }) => void;
    componentDidMount(): void;
    onRefresh: () => void;
    onEndReached: () => void;
    footer: () => any;
    render(): any;
}
export default ListPagination;
