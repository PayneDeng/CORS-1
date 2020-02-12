function jsonp(url){
  return new Promise((resolve,rejects)=>{
    const random = 'payneJSONPCallbackName'+Math.random()
    window[random] = (data) => {
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}`
    script.onload = () =>{
      script.remove()
  }
  script.onerror = () => {
    rejects()
  }
  document.body.appendChild(script)
  })
}

jsonp('http://qq.com:8888/friends.js')
  .then((data)=>{
  console.log(data)
})
