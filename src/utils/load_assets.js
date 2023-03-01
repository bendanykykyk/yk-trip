// url第一个参数，当前文件相对这个图片的路径;第二个参数，当前文件的路径
const requireResource = (imagePath) => {
  //   console.log(new URL(`../assets/img/${imagePath}`, import.meta.url).href)
  return new URL(`../assets/img/${imagePath}`, import.meta.url).href
}
export { requireResource }
