

//设置localstorage
export const setLocalStorage=(key, value)=>{
  
  return localStorage.setItem(key,value)
}
//获取localstorage
export const getLocalStorage=(key)=>{
  
  return localStorage.getItem(key)
}
//移除localstorage
export const removeLocalStorage=(key)=>{

  return localStorage.removeItem(key)
}
//清除所有localstorage
export const removeAll=()=>localStorage.clear()
