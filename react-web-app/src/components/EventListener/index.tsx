import { useEffect } from "react"

export function EventListener() {
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll(event: any) {
    console.log('Windows Scroll', event)
}
  return (
    <h1>Event Listener</h1>
  )
}