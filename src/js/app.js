import hello from '/src/assets/hello.pdf'
import bye from '/src/assets/bye.pdf'

export default () => {
  const urls = [{title: 'hello.pdf', url: hello}, {title: 'bye.pdf', url: bye}]

  const downloadFiles = () => {
    urls.forEach((file) => {
      const a = Object.assign(document.createElement('a'), {
        href: file.url,
        style: 'display: none',
        download: file.title
      })
      document.body.appendChild(a)
      a.click()
      a.remove()
    })
  }


  document.querySelector('#download').addEventListener('click', downloadFiles)
}
