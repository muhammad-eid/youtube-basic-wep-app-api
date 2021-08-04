import React from 'react';

const VideoDetails = (props) => {
    // state = { title: '', description: '' }
    // componentDidUpdate() {
    //     this.setState({
    //         title: this.props.videoShow.snippet.title,
    //         description: this.props.videoShow.snippet.description
    //     })
    // }
    // render() {
    // console.log(this.props.videoShow);
    if (!props.videoShow) {
        return <div>Loading...</div>
    }
    return (
        <div className="ui card segment" style={{ width: '100%' ,hight:'60vh'}}>
            <div className="image">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${props.videoShow.id.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="content">
                <div className="header">
                    {props.videoShow.snippet.title}
                </div>
                {/* <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div> */}
                <div className="description">
                    {props.videoShow.snippet.description}
                </div>
            </div>

        </div>
    );

}
// }

VideoDetails.defaultProps = {
    videoShow: {
        snippet: { title: '', description: '' }
    }
}
export default VideoDetails;
