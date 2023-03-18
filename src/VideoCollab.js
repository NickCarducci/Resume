import React from "react";

class VideoCollab extends React.Component {
  render() {
    return (
      <div
        onClick={() => console.log("print")}
        className={this.props.openVids ? "vimeo-wrapper" : "vimeo-wrapperfalse"}
      >
        <div
          onClick={this.props.closevideos}
          style={
            !this.props.openVids
              ? {
                  display: "flex",
                  position: "relative",
                  left: "0%",
                  width: "100%",
                  height: "56px",
                  transform: "translatex(100%)",
                  transition: ".3s ease-out",
                  alignItems: "center",
                  textIndent: "10px",
                  border: "1px solid black"
                }
              : {
                  display: "flex",
                  position: "relative",
                  left: "0%",
                  width: "100%",
                  height: "56px",
                  transform: "translatex(0%)",
                  transition: ".3s ease-in",
                  alignItems: "center",
                  textIndent: "10px",
                  border: "1px solid black",
                  cursor: "pointer"
                }
          }
        >
          {"< Go back"}
        </div>
        <iframe
          title="vid1"
          src="https://player.vimeo.com/video/202106185" //autoplay=1&muted=1
          style={{ width: 640, height: 360 }}
          allowFullScreen
          /*loop
  autoPlay
  playsInline
  muted*/
        />
        <iframe
          title="vid2"
          src="https://player.vimeo.com/video/137201995"
          width="640"
          height="360"
          marginHeight="0"
          marginWidth="0"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          title="vid3"
          src="https://player.vimeo.com/video/413281034"
          width="640"
          height="360"
          marginHeight="0"
          marginWidth="0"
          frameBorder="0"
          allowFullScreen
          style={{ transform: "translateX(-33.4%)" }}
        />
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            width: "150px",
            height: "56px",
            textIndent: "20px"
          }}
        >
          1 more unreleased
        </div>
      </div>
    );
  }
}
export default VideoCollab;
