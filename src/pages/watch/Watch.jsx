import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="https://dsqqu7oxq6o1v.cloudfront.net/preview-960078-k1nE2S24GN-high.mp4"></video>
    </div>
  )
}

export default Watch