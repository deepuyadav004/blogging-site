import './Post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src='https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320'
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis aspernatur consequatur atque, ratione eos maxime in magnam fugit
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis aspernatur consequatur atque, ratione eos maxime in magnam fugitLorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis aspernatur consequatur atque, ratione eos maxime in magnam fugitLorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis aspernatur consequatur atque, ratione eos maxime in magnam fugit
        </p>
    </div>
  )
}
