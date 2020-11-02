import React from 'react';
import Carousel from '../../shared/Carousel';
import Icon from '../Icon';
import Button from '../Button';

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
        <div className='feed'>
          <div className='feed-header'>
            <div className='user-profile'>
              <a className='thumbnail' href=''>
                <img src={thumbnail} />
              </a>
              <a className='nickname' href=''>
                <span>{nickname}</span>
              </a>
            </div>
            <div className='user-tab'>
              <Button>
                <Icon type='option' width={16} height={16} />
              </Button>
            </div>
          </div>
          <Carousel images={images} startIndex={0} />
          <div className='feed-content-wrapper'>
            <div className='content'>
              <div className='tabs'>
                <div className='left-tab'>
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
                </div>
                <div className='right-tab'>
                  <span className='pictures-length'></span>
                  <Button className='save-btn' onClick={this.onToggle}>
                    <Icon
                      type='save'
                      className='save'
                      isToggle={this.state.save}
                      width={24}
                      height={24}
                    />
                  </Button>
                </div>
              </div>
              <div className='like-length'>
                <Button className='like-btn'>
                  <span>좋아요 {likes.length}개</span>
                </Button>
              </div>
              <div className='description-wrapper'>
                <a className='nickname' href=''>
                  {nickname}
                </a>
                &nbsp;
                <span className='description'>{content}</span>
                &nbsp;
                <span className='more'>
                  <Button>더보기</Button>
                </span>
              </div>
              <div className='comments'>
                {comments.length >= 2 ? (
                  <div className='comments-length'>
                    <a className='length' href=''>
                      <span>댓글 {comments.length}개 모두 보기</span>
                    </a>
                  </div>
                ) : null}
                <div className='comment-lists'>
                  <ul className='lists'>
                    {comments.map((comment, index) => (
                      <li key={index} className='list'>
                        <div className='comment-info'>
                          <div className='info'>
                            <span className='nickname'>
                              <a href=''>{comment.nickname}</a>
                            </span>
                            &nbsp;
                            <span className='comment'>{comment.comment}</span>
                          </div>
                          <div className='like-btn'>
                            <Button>
                              <Icon type='like' width={12} height={12} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='since'>
                  <a href=''>
                    <span>{date}</span>
                  </a>
                </div>
              </div>
              <div className='comment-area'>
                <div className='comment-form'>
                  <form action='POST'>
                    <textarea
                      className='text-comment'
                      placeholder='댓글 달기...'
                      autoComplete='off'
                      autoCorrect='off'></textarea>
                    <Button>게시</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feed;
