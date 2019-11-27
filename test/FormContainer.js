// //module.exports = require('../src/RenderMediaFile');
import React from 'react';
import ReactDOM from "react-dom";
import RenderMediaFile from "../src/RenderMediaFile";


class FormContainer extends Component {
    constructor() {
      super();
      this.state = {
        seo_title: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    render() {
      const { seo_title } = this.state;
      return (
        // < RenderMediaFile />
        // <form id="article-form">
          <div>xptm dsdfsdfs</div>
          // <Input
          //   text="SEO title"
          //   label="seo_title"
          //   type="text"
          //   id="seo_title"
          //   value={seo_title}
          //   handleChange={this.handleChange}
          // /> 
        // </form>
      );
    }
  }
  export default FormContainer;
  
  const wrapper = document.getElementById("create-article-form");
  wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;