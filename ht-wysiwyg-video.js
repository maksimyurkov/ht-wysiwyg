"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTWysiwygVideo extends LitElement {
  render() {
    const { data } = this;
    let poster = `${window.cloudinaryURL}/video/upload/v${data.version}/${
      data.public_id
    }.jpg`;
    let mp4 = `${window.cloudinaryURL}/video/upload/v${data.version}/${
      data.public_id
    }.mp4`;
    let webm = `${window.cloudinaryURL}/video/upload/v${data.version}/${
      data.public_id
    }.webm`;
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }
      </style>
      <div id="container">
        <video width="100%" height="auto" controls="controls" poster=${poster}>
            <source type="video/mp4" src=${mp4}>
            <source type="video/webm" src=${webm}>
        </video>
      </div>
`;
  }

  static get is() {
    return "ht-wysiwyg-video";
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }
}

customElements.define(HTWysiwygVideo.is, HTWysiwygVideo);
