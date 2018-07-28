// auto adjust margin top to make the vertical align center
export function autoVerticalCenter(target, parentHeight) {
  let top = 0
  if (Array.isArray(target)) {
    console.log('Array true')
    top = target ? target[0].offsetHeight : 0
    for (let i = 0; i < target.length; i++) {
      target[i].style.marginTop = (parentHeight - parseInt(top)) / 2 + 'px'
    }
  }else{
    top = target ? target.offsetHeight : 0
    target.style.marginTop = (parentHeight - parseInt(top)) / 2 + 'px'
  }
}
