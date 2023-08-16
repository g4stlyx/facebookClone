import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';


function Posts() {

    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);
  
    useEffect(() => {
      const getComments = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
        );
        const data = await res.json();
        setPosts(data);
      };
  
      getComments();
    }, []);
  
    const fetchComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
      );

      const data = await res.json();
      return data;
    };
  
    const fetchData = async () => {
      const postsFromServer = await fetchComments();
  
      setPosts([...posts, ...postsFromServer]);
      if (postsFromServer.length === 0 || postsFromServer.length < 20) {
        setHasMore(false);
      }
      setPage(page + 1);
    };


    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className='posts-container'>
                {
                posts.map(post=>{
                    return <Post key={post.id} post={post}/>
                })
                }
            </div>
        </InfiniteScroll>
    )
}

export default Posts