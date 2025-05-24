import './Posts.css';
import timer from '../../assets/timer.png';
import comment from '../../assets/comment.png';


const Posts = () => {
  return (
    <div className="post">
      {/* Section Heading */}
      <div className="post-heading">
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>
      </div>

      {/* All Post Cards */}
      <div className="post-categories">

        {/* === Post Card 1 === */}
        <div className="post-card">
          <div className="post-image">
            <h6>New</h6>
          </div>

          <div className="post-tags">
            <a id="google" href="">Google</a>
            <a href="">Trending</a>
            <a href="">New</a>
          </div>

          <div className="post-content">
            <h4>
              Loudest à la Madison #1 <br /> (L'intégral)
            </h4>
            <h6>
              We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.
            </h6>
          </div>

          <div className="post-meta">
            <div className="meta-item">
              <img src={timer} alt="timer icon" />
              <h4>22 April 2021</h4>
            </div>
            <div className="meta-item">
              <img src={comment} alt="comment icon" />
              <h4>10 comments</h4>
            </div>
          </div>

          <div className="post-footer">
            <button type="button">Learn More</button>
            <img src="" alt="" />
          </div>
        </div>

        {/* === Post Card 2 === */}
        <div className="post-card">
          <div className="post-image-two">
            <h6>New</h6>
          </div>

          <div className="post-tags">
            <a id="google" href="">Google</a>
            <a href="">Trending</a>
            <a href="">New</a>
          </div>

          <div className="post-content">
            <h4>
              Loudest à la Madison #1 <br /> (L'intégral)
            </h4>
            <h6>
              We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.
            </h6>
          </div>

          <div className="post-meta">
            <div className="meta-item">
              <img src={timer} alt="timer icon" />
              <h4>22 April 2021</h4>
            </div>
            <div className="meta-item">
              <img src={comment} alt="comment icon" />
              <h4>10 comments</h4>
            </div>
          </div>

          <div className="post-footer">
            <button type="button">Learn More</button>
            <img src="" alt="" />
          </div>
        </div>

        {/* === Post Card 3 === */}
        <div className="post-card">
          <div className="post-image-three">
            <h6>New</h6>
          </div>

          <div className="post-tags">
            <a id="google" href="">Google</a>
            <a href="">Trending</a>
            <a href="">New</a>
          </div>

          <div className="post-content">
            <h4>
              Loudest à la Madison #1 <br /> (L'intégral)
            </h4>
            <h6>
              We focus on ergonomics and meeting <br />
              you where you work. It's only a <br />
              keystroke away.
            </h6>
          </div>

          <div className="post-meta">
            <div className="meta-item">
              <img src={timer} alt="timer icon" />
              <h4>22 April 2021</h4>
            </div>
            <div className="meta-item">
              <img src={comment} alt="comment icon" />
              <h4>10 comments</h4>
            </div>
          </div>

          <div className="post-footer">
            <button type="button">Learn More </button>
            <img src="" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Posts;
