import React from 'react';
import {FlatList} from 'react-native';
import Story from './Story';

const StoryBar = props => (
  <FlatList
    horizontal
    data={props.stories}
    keyExtractor={item => item.id}
    renderItem={({item}) => <Story {...item} />}
  />
);

export default StoryBar;
