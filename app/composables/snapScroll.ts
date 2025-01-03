export const useSnapScroll = () => {

  const atTop = useState('snap_container_at_top', () => true)

  const scrollTo = (id: string, offset: number = 0) => {
    const element = document?.getElementById(id)
    if (!element) return
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  return {
    atTop,
    scrollTo
  }
}
