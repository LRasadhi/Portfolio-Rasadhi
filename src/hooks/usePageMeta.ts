import { useEffect } from "react"

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute(property ? "property" : "name", name)
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", content)
    }

    setMeta("description", description)
    setMeta("og:title", title, true)
    setMeta("og:description", description, true)
  }, [title, description])
}
