import React from "react";
export default class TestCase extends React.Component {
  constructor() {
    super();

    this.state = {
      showVideo: false
    };
  }

  handleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    });
  };
  render() {
    return (
      <div>
        {this.state.showVideo == false && (
          <div
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10,
              display: "inline-block"
            }}
          >
            Hollow Coves - The Open Road
          </div>
        )}

        {this.state.showVideo == true && (
          <iframe
            width="660"
            height="362"
            src="https://www.youtube.com/embed/8_NBwub3gxg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
        <button
          onClick={this.handleVideo}
          style={{
            position: "absolute",
            left: 108,
            top: 14,
            zIndex: 10
          }}
        >
          PLAY VIDEO
        </button>
      </div>
    );
  }
}
