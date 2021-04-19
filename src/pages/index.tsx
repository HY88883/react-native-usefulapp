import React from 'react';
import {createStackNavigator, HeaderStyleInterpolators} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Easing, Platform, StatusBar, StyleSheet} from "react-native";
import Demo from "@/pages/Demo";
import ListPage from "@/pages/ListPage";
import CheckboxDemo from "@/pages/checkboxDemo";
import CollapsibleDemo from "@/pages/CollapsibleDemo";
import FormExample from "@/pages/FormDemo";

class Navigator extends React.Component {
    render() {
        let Stack = createStackNavigator<any>();
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        //设置跳转时的动画效果
                        transitionSpec: {
                            open: {
                                animation: 'timing',
                                config: {
                                    duration: 450,
                                    easing: Easing.bezier(0.35, 0.39, 0, 1)
                                }
                            },
                            close: {
                                animation: 'timing',
                                config: {
                                    duration: 450,
                                    easing: Easing.bezier(0.35, 0.39, 0, 1)
                                }
                            }
                        },
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: ({ current, next, layouts }) => {
                            return {
                                cardStyle: {
                                    transform: [
                                        {
                                            translateX: next
                                                ? next.progress.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, -layouts.screen.width * .3]
                                                })
                                                : current.progress.interpolate( {
                                                    inputRange: [0, 1],
                                                    outputRange: [layouts.screen.width, 0]
                                                })
                                        }
                                    ]
                                }
                            };
                        },
                        //开启手势,并设置手势方向
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        ...Platform.select({
                            android: {
                                headerStatusBarHeight: StatusBar.currentHeight,
                            },
                        }),
                        headerBackTitleVisible: false,
                        headerTintColor: '#333',
                        // 设置滑动时的阴影
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                            }),
                        },
                    }}>
                    <Stack.Screen
                        name="Login"
                        options={{headerShown:false}}
                        component={Demo}
                    />
                    <Stack.Screen
                        name="ListPage"
                        options={{headerShown:false}}
                        component={ListPage}
                    />
                    {/*CheckboxDemo*/}
                    <Stack.Screen
                        name="CheckboxDemo"
                        options={{headerShown:false}}
                        component={CheckboxDemo}
                    />
                    <Stack.Screen
                        name="CollapsibleDemo"
                        options={{headerShown:false}}
                        component={CollapsibleDemo}
                    />
                    {/*FormExample*/}
                    <Stack.Screen
                        name="FormExample"
                        options={{headerShown:false}}
                        component={FormExample}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
                }

}

export default Navigator
