import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="con">
      <div className="item">
        <h1 className="title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
