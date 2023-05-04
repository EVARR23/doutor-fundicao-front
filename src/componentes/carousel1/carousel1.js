import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Image} from 'react-native';
import styles from '../../styles/styleCarousel1';
import Image1 from './image1';
import Image2 from './image2';
import Image3 from './image3';


const images = [
  { id: 1, component: <Image1 /> },
  { id: 2, component: <Image2 /> },
  { id: 3, component: <Image3 /> },
];

const Carousel1 = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      flatListRef.current.scrollToIndex({ index, animated: true });
    }, 3000000);

    return () => clearInterval(timer);
  }, [index]);

  const renderItem = ({ item }) => item.component;

  return (
    <View style={styles.carousel1}>
      <FlatList style={styles.flatList}
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};


export default Carousel1;
