# hunt-react-native

npm install

## Bugs solve

  go to node_modules/react-native-safe-area-view => index.js
  
  change
  
  this.view.getNode().measureInWindow((winX, winY, winWidth, winHeight)
  
  to
  
  this.view.measureInWindow((winX, winY, winWidth, winHeight)
  
