import React from 'react'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
        key={`gatsby-plugin-subscribers`}
        dangerouslySetInnerHTML={{
          __html: `
            <script type="text/javascript">
            var subscribersSiteId = '${pluginOptions.id}';
            </script>
            <script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
            `
        }}
      />
    ])
  }
}