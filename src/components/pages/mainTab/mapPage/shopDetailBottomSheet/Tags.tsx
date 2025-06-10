import {KakaoSearchClosestShopDocument} from '@utils/API';
import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TagsProps {
  shop: KakaoSearchClosestShopDocument;
}

interface TagProps {
  name: string;
}

const Tags: FC<TagsProps> = ({shop}) => {
  const categorys = useMemo(() => {
    return shop.category_name.split(' > ');
  }, [shop]);
  return (
    <View style={styles.container}>
      {categorys.map((category, idx) => {
        return <Tag key={idx} name={category} />;
      })}
    </View>
  );
};

const Tag: FC<TagProps> = ({name}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#2cb3f1',
    borderRadius: 4,
    marginRight: 4,
    marginTop: 4,
  },
  tagName: {
    fontSize: 12,
    color: '#fff',
  },
});

export default React.memo(Tags);
