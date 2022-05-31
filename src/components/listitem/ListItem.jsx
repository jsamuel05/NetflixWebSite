import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

const ListItem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://i.pinimg.com/564x/82/0f/7b/820f7b06a217a39c1e81b419f974fce9.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>4 hours 20 mins</span>
            <span className="limit">+18</span>
            <span>1969</span>
          </div>
          <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Alias ducimus soluta adipisci, quis aliquam.
          </div>
          <div className="genre">Comedy</div>
        </div>
      </>
      )}
    </div>
  )
}

export default ListItem