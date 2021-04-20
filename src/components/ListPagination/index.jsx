import React, { PureComponent } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { scaleSizeH, scaleSizeW, setSpText } from '@/utils/index';
//列表分页
class ListPagination extends PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            isFirstLoading: false,
            isFetchLoading: false,
            list: [],
        };
        this.pagination = {
            total: 0,
            size: 10,
            current: 1,
            pages: 0,
        };
        this.pageParams = { current: 1, size: 0 };
        this.isNew = false;
        this.callBack = (data) => {
            if (this.isNew) {
                this.pagination = Object.assign({}, data.pagination);
                this.setState({
                    list: [...data.list],
                    isFirstLoading: false,
                }, () => {
                    this.isNew = false;
                });
            }
            else {
                this.setState({
                    list: [...this.state.list, ...data.list],
                    isFetchLoading: false,
                });
            }
        };
        this.onRefresh = () => {
            const { pageParams, refresh } = this.props;
            this.pageParams = Object.assign({}, pageParams);
            this.isNew = true;
            this.setState({ isFirstLoading: true });
            refresh(this.callBack, this.pageParams);
        };
        this.onEndReached = () => {
            const { isFetchLoading } = this.state;
            const { refresh } = this.props;
            const { total, size, current, pages } = this.pagination;
            if ((this.pageParams && this.pageParams.current >= pages) ||
                isFetchLoading) {
                return;
            }
            else {
                this.pageParams.current++;
                this.setState({ isFetchLoading: true });
                refresh(this.callBack, this.pageParams);
            }
        };
        this.footer = () => {
            const { isFetchLoading, isFirstLoading } = this.state;
            const { pages } = this.pagination;
            if (isFetchLoading) {
                return (<View style={styles.loading}>
                    <ActivityIndicator size={'small'} color={'#0066FF'}/>
                    <Text style={styles.loadingText}>正在加载中~</Text>
                </View>);
            }
            else if (this.pageParams.current >= pages && !isFirstLoading) {
                return (<View style={styles.loading}>
                    <Text style={styles.loadingText}>到底啦~</Text>
                </View>);
            }
            else
                return <></>;
        };
    }
    componentDidMount() {
        this.onRefresh();
    }
    render() {
        const { list, isFirstLoading } = this.state;
        const { renderItem, keyExtractor } = this.props;
        return (<FlatList style={styles.flatList} data={list} renderItem={renderItem} keyExtractor={keyExtractor} ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>} onEndReached={this.onEndReached} onEndReachedThreshold={0.2} refreshControl={<RefreshControl title={'Loading'} //android中设置无效
             colors={['#3c85ff']} //android
             tintColor={'#3c85ff'} //ios
             titleColor={'#3c85ff'} refreshing={isFirstLoading} onRefresh={this.onRefresh}/>} ListFooterComponent={this.footer()}/>);
    }
}
ListPagination.defaultProps = {
    pageParams: {
        current: 1,
        size: 10,
    },
    keyExtractor: (item, index) => index
};
const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    itemSeparator: { height: scaleSizeH(12) },
    loading: {
        backgroundColor: '#f9f9f9',
        height: scaleSizeH(30),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    loadingText: {
        fontSize: setSpText(10),
        color: '#888',
        marginLeft: scaleSizeW(5),
    },
});
export default ListPagination;
