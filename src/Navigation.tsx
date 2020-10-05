import React from 'react';
import { Home, News, Settings, Stats, NewsDetail, Menu, Upgrade } from './Importer';
import NavHeader from './components/NavHeader';
import MenuAnimation from './animations/Menu';
import ScreenAnimation from './animations/Screen';
import ArticleDetailAnimation from './animations/ArticleDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"  
                component={Home}  
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="News"
                component={News}
                options={{ 
                header: props => 
                    <NavHeader 
                        {...props}
                        title='Nouveautés'
                    />,
                    ...ScreenAnimation 
                }}
            />
            <Stack.Screen 
                name="Settings"
                component={Settings}
                options={
                    { 
                        header: props => 
                            <NavHeader 
                                {...props} 
                                title='Configuration'
                            />,
                        ...ScreenAnimation
                    }
                }
            />
            <Stack.Screen 
                name="Upgrade"
                component={Upgrade}
                options={{ 
                header: props => 
                    <NavHeader 
                        {...props}
                        title='Mise à niveau'
                    />,
                    ...ScreenAnimation 
                }}
            />
            <Stack.Screen 
                name="Stats"
                component={Stats}
                options={{ 
                header: props => 
                        <NavHeader 
                        {...props}
                        title='Statistiques'
                    />,
                    ...ScreenAnimation 
                }}
            />


            <Stack.Screen 
                name="NewsDetail"
                component={NewsDetail}
                options={{
                    headerTitle: '',
                    ...ArticleDetailAnimation
                }}
            />
            <Stack.Screen 
                name="Menu"
                component={Menu}
                options={
                    {
                        headerShown: false, 
                        cardStyle: { 
                            backgroundColor:'rgba(255,255,255,0.9)',
                        },
                        ...MenuAnimation
                    }
                }
            />
        </Stack.Navigator>
    )
}

export default Navigation;