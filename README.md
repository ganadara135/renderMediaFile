# Notice
There are trouble in making a bundling on Webpack with React Hooks. So I change this as a class component.
Next time I will try to insert rich control options such as tag colors and React-player controls. 

# Supporting File Types
pdf, mp4, mp3, jpg, jpeg, gif, png

# Installation
React components is available as an npm package.

```bash
$ npm i @kcod/render-media-file
```

# ⌨️ Usage
Here is a quick example to get you started, it's all you need:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RenderMedia from '@kcod/render-media-file';

class App extends React.Component { 
  render() {
    return (
      <RenderMedia 
        fileInfo={{
          src:"https://user-images.com/sample.gif", 
          fileType:"image/gif"}} />
          // if you want to test pdf file, you can see CORS policy. So install Chrome extention program such 'Allow CORS'
          //src:"http://www.orimi.com/pdf-test.pdf",
          //src:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", 
          //fileType:"application/pdf"}} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

# Demo result
![ezgif com-gif-maker](https://user-images.githubusercontent.com/24896007/69593100-8a710900-103b-11ea-8f89-12feea8bec3a.gif)


# User Guide
### Props
|Prop name | Description| Default Value | Example Values |
|----------|------------|---------------|----------------|
|fileInfo  | only props on this component and this has two atrributes, <br>one is `'src'` and the other is `'fileType'`. <br>src is the remote location addresses. <br>fileType is [MIME type](https://en.wikipedia.org/wiki/Media_type) | n/a | <ul><li>fileInfo={{ src:`"http://example.com/sample.jpg"`, <br> fileType:`"image/png"`}}</li>|