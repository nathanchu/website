import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="dns-prefetch" href="//analytics.nathanchu.com/" />
        {/* Matomo */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(function(){"use strict";var _paq=window._paq=window._paq||[];_paq.push(["trackPageView"]),_paq.push(["enableLinkTracking"]),function(){var a="//analytics.nathanchu.com/";_paq.push(["setTrackerUrl",a+"matomo.php"]),_paq.push(["setSiteId","1"]);var e=(t=document).createElement("script"),t=t.getElementsByTagName("script")[0];e.type="text/javascript",e.async=!0,e.src=a+"matomo.js",t.parentNode.insertBefore(e,t)}();})();'
          }}
        />
        {/* End Matomo Code */}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
