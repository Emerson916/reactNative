import {FlatList} from 'react-native';
import React from 'react';
import StoryBar from '../StoryBar';
import Card from '../Card';

const emptyState =   {
  id: '-1',
  name: 'Puuutz',
  title: 'Nada Aqui',
  location: '404',
  comments: 'Nenhum post disponível',
};

const Feed = ({posts, stories}) => { // props = {posts: [<lista de posts], stories: [<lista de stories]}
  const postsData = posts ?? [emptyState];
  return (
    <FlatList
      data={postsData}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card {...item} />}
      ListHeaderComponent={<StoryBar stories={stories} />}
    />
  );
};

export default Feed;
