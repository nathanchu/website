import { useState, useEffect } from 'react'

function useTypewriter(words, { random = false } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === words.length) return

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex(prev =>
        random
          ? Math.floor(Math.random() * words.length)
          : (prev + 1) % words.length
      )
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex(prev => prev + (reverse ? -1 : 1))
      },
      reverse ? 75 : subIndex === words[index].length ? 3000 : 150
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, random])

  return words[index].substring(0, subIndex)
}

export default useTypewriter
