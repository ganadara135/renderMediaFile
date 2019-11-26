# Supporting File Types
pdf, mp4, mp3, jpg, jpeg, gif, png

# Installation
React Rainbow components is available as an npm package.

```bash
$ npm i @kcod/render-media-file
```

# ⌨️ Usage
Here is a quick example to get you started, it's all you need:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import RenderMediaFile from 'RenderMediaFile';
 
function App() {
    return <div><RenderMultiMedia fileInfo={{src: "https://example.com/sample.pdf", fileType: "application/pdf"}} /></div>;
}
 
ReactDOM.render(<App />, document.getElementById('container'));
```

# Demo result
![ezgif com-gif-maker](https://user-images.githubusercontent.com/24896007/69593100-8a710900-103b-11ea-8f89-12feea8bec3a.gif)


# User Guide
### Props
|Prop name | Description| Default Value | Example Values |
|----------|------------|---------------|----------------|
|fileInfo  | only props on this component and this has two atrributes, <br>one is `'src'` and the other is `'fileType'`. <br>src is the remote location addresses. <br>fileType is MIME type(https://en.wikipedia.org/wiki/Media_type) | n/a | <ul><li>fileInfo={{src:`"http://example.com/sample.jpg"`, fileType:`"image/png"`}}</li><li> |