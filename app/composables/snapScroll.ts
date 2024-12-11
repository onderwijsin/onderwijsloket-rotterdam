export const useSnapScroll = () => {

  const atTop = useState('snap_container_at_top', () => true)

  const scrollTo = (id: string) => {
    document?.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }

  return {
    atTop,
    scrollTo
  }
}
