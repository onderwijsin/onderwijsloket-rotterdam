export const useSnapScroll = () => {

  const y = useState('snap_container_y', () => 0)

  return {
    y
  }
}
