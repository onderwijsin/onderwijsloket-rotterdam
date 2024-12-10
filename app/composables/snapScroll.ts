export const useSnapScroll = () => {

  const atTop = useState('snap_container_at_top', () => true)

  return {
    atTop
  }
}
