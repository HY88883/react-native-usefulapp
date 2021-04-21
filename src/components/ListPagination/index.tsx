import React, {PureComponent} from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    ListRenderItemInfo,
    RefreshControl,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '../../utils/index';

interface IPageParams {
  current: number;
  size: number;
}

interface IListPagination {
  refresh: (func: (data: any) => void, pageParams?: {}) => void;
  pageParams?: IPageParams;
    renderItem:ListRenderItem<any> | null | undefined;
    keyExtractor?:(item:any,index:number)=>string;
}

interface IListPaginationState {
  list: Array<any>;
  isFirstLoading: boolean;
  isFetchLoading: boolean;
}

//列表分页
class ListPagination extends PureComponent<
  IListPagination,
  IListPaginationState
> {
  static defaultProps = {
    pageParams: {
      current: 1,
      size: 10,
    },
      keyExtractor:(item: any, index: any)=>index
  };

  state = {
    isFirstLoading: false,
    isFetchLoading: false,
    list: [],
  };

  pagination = {
    total: 0,
    size: 10,
    current: 1,
    pages: 0,
  };

  pageParams: any= {current:1,size:0};

  isNew: boolean = false;

  callBack = (data: { pagination: { total: number; size: number; current: number; pages: number; }; list: any; }) => {
    if (this.isNew) {
      this.pagination = {...data.pagination};
      this.setState(
        {
          list: [...data.list],
          isFirstLoading: false,
        },
        () => {
          this.isNew = false;
        },
      );
    } else {
      this.setState({
        list: [...this.state.list, ...data.list],
        isFetchLoading: false,
      });
    }
  };

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
      const {pageParams,refresh} = this.props;
      this.pageParams = {...pageParams};
      this.isNew = true;
    this.setState({isFirstLoading: true});
    refresh(this.callBack, this.pageParams);
  };

  onEndReached = () => {
    const {isFetchLoading} = this.state;
    const {refresh} = this.props;
    const {total, size, current, pages} = this.pagination;
    if (
      (this.pageParams && this.pageParams.current >= pages) ||
      isFetchLoading
    ) {
      return;
    } else {
      this.pageParams.current++;
      this.setState({isFetchLoading: true});
      refresh(this.callBack, this.pageParams);
    }
  };

  footer=() =>{
        const {isFetchLoading,isFirstLoading} = this.state;
        const { pages} = this.pagination;
        if (isFetchLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size={'small'} color={'#0066FF'} />
                    <Text style={styles.loadingText}>正在加载中~</Text>
                </View>
            );
        }else if(this.pageParams.current >= pages&&!isFirstLoading){
            return (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>到底啦~</Text>
                </View>
            );
        }
        else return <></>;
    }


  render() {
    const {list, isFirstLoading} = this.state;
    const {renderItem, keyExtractor} = this.props;
    return (
      <FlatList
        style={styles.flatList}
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            title={'Loading'} //android中设置无效
            colors={['#3c85ff']} //android
            tintColor={'#3c85ff'} //ios
            titleColor={'#3c85ff'}
            refreshing={isFirstLoading}
            onRefresh={this.onRefresh}
          />
        }
        ListFooterComponent={this.footer()}
      />
    );
  }
}
const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  itemSeparator: {height: scaleSizeH(12)},
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
