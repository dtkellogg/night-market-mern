var React = require("react");

function DefaultLayout(props) {
  return (
    <html>
      <h1>Default</h1>
    {/* "heroku-postbuild": "cd NM2 && npm install && npm run build"    </html> */}
    {/* "NPM_CONFIG_PRODUCTION=false npm install && npm run build" */}
        {/* "heroku-postbuild": "cd NM2 && npm install --only=dev && npm install && npm run build", */}
        {/* "NPM_CONFIG_PRODUCTION=false npm install --prefix NM2 && npm run build --prefix NM2", */}
        {/* "cd NM2 && npm install --only=dev && npm install && npm run build" */}
  );
}

module.exports = DefaultLayout;
