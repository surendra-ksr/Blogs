import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {imageUrl, id, topic, title, author, avatarUrl} = blogData

  return (
    <Link to={`/blogs/${id}`} className="linkStyle">
      <div className="itemContainer">
        <img className="itemImage" src={imageUrl} alt={`item${id}`} />
        <div className="itemDetails">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorDetails">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
