import React from 'react';
import Carousel from '../Carousel';
import Icon from '../Icon';
import Button from '../Button';
import Container from '../Container';
import Image from '../Image';
import Text from '../Text';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  state = {
    heart: false,
    save: false,
  };

  onToggle(event) {
    const { className } = event.currentTarget.children[0];
    this.setState((state) => (state[className] = !state[className]));
  }

  render() {
    const {
      thumbnail,
      nickname,
      likes,
      content,
      comments,
      date,
      images,
    } = this.props;

    return (
      <>
        <Container className='feed'>
          <Container className='feed-header'>
            <Container className='user-profile'>
              <a className='thumbnail' href=''>
                <Image src={thumbnail} />
              </a>
              <a className='nickname' href=''>
                <Text>{nickname}</Text>
              </a>
            </Container>
            <Container className='user-tab'>
              <Button>
                <Icon type='option' width={16} height={16} />
              </Button>
            </Container>
          </Container>
          <Carousel images={images} startIndex={0} />
          <Container className='feed-content-wrapper'>
            <Container className='content'>
              <Container className='tabs'>
                <Container className='left-tab'>
                  <Button className='like-btn' onClick={this.onToggle}>
                    <Icon
                      type='heart'
                      className='heart'
                      isToggle={this.state.heart}
                      width={24}
                      height={24}
                    />
                  </Button>
                  <Button className='comment-btn'>
                    <Icon type='comment' width={24} height={24} />
                  </Button>
                  <Button className='share-btn'>
                    <Icon type='share' width={24} height={24} />
                  </Button>
                </Container>
                <Container className='right-tab'>
                  <Text className='pictures-length'></Text>
                  <Button className='save-btn' onClick={this.onToggle}>
                    <Icon
                      type='save'
                      className='save'
                      isToggle={this.state.save}
                      width={24}
                      height={24}
                    />
                  </Button>
                </Container>
              </Container>
              <Container className='like-length'>
                <Button className='like-btn'>
                  <Text>좋아요 {likes.length}개</Text>
                </Button>
              </Container>
              <Container className='description-wrapper'>
                <a className='nickname' href=''>
                  {nickname}
                </a>
                &nbsp;
                <Text className='description'>{content}</Text>
                &nbsp;
                <Text className='more'>
                  <Button>더보기</Button>
                </Text>
              </Container>
              <Container className='comments'>
                {comments.length >= 2 ? (
                  <Container className='comments-length'>
                    <a className='length' href=''>
                      <Text>댓글 {comments.length}개 모두 보기</Text>
                    </a>
                  </Container>
                ) : null}
                <Container className='comment-lists'>
                  <ul className='lists'>
                    {comments.map((comment, index) => (
                      <li key={index} className='list'>
                        <Container className='comment-info'>
                          <Container className='info'>
                            <Text className='nickname'>
                              <a href=''>{comment.nickname}</a>
                            </Text>
                            &nbsp;
                            <Text className='comment'>{comment.comment}</Text>
                          </Container>
                          <Container className='like-btn'>
                            <Button>
                              <Icon type='like' width={12} height={12} />
                            </Button>
                          </Container>
                        </Container>
                      </li>
                    ))}
                  </ul>
                </Container>
                <Container className='since'>
                  <a href=''>
                    <Text>{date}</Text>
                  </a>
                </Container>
              </Container>
              <Container className='comment-area'>
                <Container className='comment-form'>
                  <form action='POST'>
                    <textarea
                      className='text-comment'
                      placeholder='댓글 달기...'
                      autoComplete='off'
                      autoCorrect='off'></textarea>
                    <Button>게시</Button>
                  </form>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default Feed;
