import React from 'react';
import Container from '../Container';
import Icon from '../Icon';
import Button from '../Button';
import Image from '../Image';
import Text from '../Text';
import Carousel from '../Carousel';

class PostDetail extends React.Component {
  render() {
    const { post, profile } = this.props;
    console.log(post.images);

    return (
      <Container className='post-wrapper'>
        <Container className='close'></Container>
        <Container className='exit-container'>
          <Button onClick={() => console.log('뒤로 가기')}>
            <Icon type='close' width={24} height={24} />
          </Button>
        </Container>
        <Container className='post'>
          <Container className='images'>
            <Carousel width={480} images={post.images} startIndex={0} />
          </Container>
          <Container className='contents'>
            <Container tag='header' className='header'>
              <Container className='thumbnail'>
                <Image src={profile.thumbnail} />
                <Text className='nickname'>{profile.nickname}</Text>
                <Text className='dot'>•</Text>
                <Button>팔로잉</Button>
              </Container>
              <Container className='tab'>
                <Button type='button'>
                  <Icon type='option' width={16} height={16} />
                </Button>
              </Container>
            </Container>
            <Container className='contents-wrapper'>
              <Container className='contents'>
                <Image src={profile.thumbnail} />
                <Container className='content'>
                  <Container className='detail'>
                    <Text className='nickname'>{profile.nickname}</Text>&nbsp;
                    <Text className='description'>{post.description}</Text>
                  </Container>
                  <Container className='date'>
                    <Text>{post.date}</Text>
                  </Container>
                </Container>
              </Container>
              <Container className='comments'>
                {post.comments.map((comment, index) => (
                  <Container key={index} className='comment'>
                    <Image className='thumbnail' src={comment.thumbnail} />
                    <Container className='comment-detail'>
                      <Container className='detail'>
                        <Text className='nickname'>{comment.nickname}</Text>
                        &nbsp;
                        <Text className='description'>{comment.content}</Text>
                      </Container>
                      <Container className='date'>
                        <Text>{comment.date}</Text>
                        <Button>답글 달기</Button>
                      </Container>
                      <Container className='comment-list'>
                        <Text>⎯⎯⎯⎯⎯</Text>
                        <Button>답글 보기(1개)</Button>
                      </Container>
                    </Container>
                    <Icon className='like' type='like' width={12} height={12} />
                  </Container>
                ))}
              </Container>
            </Container>
            <Container className='tabs-wrapper'>
              <Container className='tabs'>
                <Container className='left-tab'>
                  <Button>
                    <Icon type='heart' width={24} height={24} />
                  </Button>
                  <Button>
                    <Icon type='comment' width={24} height={24} />
                  </Button>
                  <Button>
                    <Icon type='share' width={24} height={24} />
                  </Button>
                </Container>
                <Container className='right-tab'>
                  <Text className='pictures-length'></Text>
                  <Text className='save'>
                    <Icon type='save' width={24} height={24} />
                  </Text>
                </Container>
              </Container>
              <Container className='like-count'>
                <Text>좋아요 {post.likes}개</Text>
              </Container>
              <Container className='date'>
                <Text>{post.date}</Text>
              </Container>
            </Container>
            <Container className='comment-area'>
              <form action='POST'>
                <textarea
                  className='text-comment'
                  placeholder='댓글 달기...'></textarea>
                <Button>게시</Button>
              </form>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default PostDetail;
