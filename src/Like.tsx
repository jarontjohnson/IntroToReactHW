import  { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Component = () => {
  const [liked, setLiked] = useState(false);
  

  const handleLikeClick = () => {
    if (liked) {
      console.log('unliked');
    } else {
      console.log('liked');
    }
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <div onClick={handleLikeClick}>
        {liked ? <FaHeart color="red" /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default Component;