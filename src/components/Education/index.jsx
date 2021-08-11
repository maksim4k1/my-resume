import React from "react";
import style from "./Education.module.scss"

class Education extends React.Component {
  render() {
    return (
      <section className="section">
        <h2 className={`title ${style.title}`}>Education</h2>
        <p className="paragraph"><b>Facility name:</b> {this.props.university}</p>
        <p className="paragraph"><b>Graduaction year:</b> {this.props.graduationYear}</p>
      </section>
    );
  }
}

export default Education;