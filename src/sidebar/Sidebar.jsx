import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://media.istockphoto.com/photos/the-perfect-vantage-point-picture-id546763388?k=20&m=546763388&s=170667a&w=0&h=oRcHGQikd4gbJuz4n9qAQ5Kl-Y5p6qPO4w7lCS_RN34=' />
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, delectus quisquam deleniti excepturi quam id tenetur doloremque ?</p>
        </div>

        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
                <li className='sidebarListItem'>Cinema</li>
                <li className='sidebarListItem'>Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
          <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
            <li className="topListItem">Home</li>
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
