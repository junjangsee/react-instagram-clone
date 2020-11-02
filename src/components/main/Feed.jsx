import React from 'react';
import Carousel from '../../shared/Carousel';
import Icon from '../Icon';

class Feed extends React.Component {
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
              <button type='button'>
                <Icon type='option' width={16} height={16} />
              </button>
            </div>
          </div>
          <Carousel images={images} startIndex={0} />
          <div className='feed-content-wrapper'>
            <div className='content'>
              <div className='tabs'>
                <div className='left-tab'>
                  <button className='like-btn' type='button'>
                    <Icon type='heart' width={24} height={24} />
                  </button>
                  <button className='comment-btn' type='button'>
                    <Icon type='comment' width={24} height={24} />
                  </button>
                  <button className='share-btn' type='button'>
                    <Icon type='share' width={24} height={24} />
                  </button>
                </div>
                <div className='right-tab'>
                  <span className='pictures-length'></span>
                  <button className='save-btn' type='button'>
                    <Icon type='save' width={24} height={24} />
                  </button>
                </div>
              </div>
              <div className='like-length'>
                <button className='like-btn' type='button'>
                  <span>좋아요 {likes.length}개</span>
                </button>
              </div>
              <div className='description-wrapper'>
                <a className='nickname' href=''>
                  {nickname}
                </a>
                &nbsp;
                <span className='description'>{content}</span>
                &nbsp;
                <span className='more'>
                  <button type='button'>더보기</button>
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
                            <button type='button'>
                              <Icon type='like' width={12} height={12} />
                            </button>
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
                    <button type='button'>게시</button>
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
