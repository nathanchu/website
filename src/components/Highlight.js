import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
const nordTheme = {
  plain: {
    color: '#d8dee9',
    backgroundColor: '#2e3440'
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(97, 110, 136)'
      }
    },
    {
      types: ['char', 'constant', 'changed'],
      style: {
        color: 'rgb(235, 203, 139)'
      }
    },
    {
      types: ['builtin', 'class-name', 'attr-name'],
      style: {
        color: 'rgb(143, 188, 187)'
      }
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(180, 142, 173)'
      }
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(136, 192, 208)'
      }
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: 'rgb(129, 161, 193)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(191, 97, 106)'
      }
    },
    {
      types: ['inserted', 'string'],
      style: {
        color: 'rgb(163, 190, 140)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(236, 239, 244)'
      }
    },
    {
      types: ['variable', 'symbol'],
      style: {
        color: 'rgb(216, 222, 233)'
      }
    }
  ]
}

export default ({ code, className }) => {
  return (
    <Highlight {...defaultProps} theme={nordTheme} code={code} language="json">
      {({ defaultClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${defaultClassName}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
