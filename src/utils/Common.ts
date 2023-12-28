import dayjs from 'dayjs'

/**
 * 占位字符串替换
 * @param placeholderStr 占位符字符串
 * @param placeholders 占位符替换对象
 * @param char 占位符, 默认为':'
 * @returns 替换后的字符串
 */
export function replacePlaceholders(
  placeholderStr: string,
  placeholders: Record<string, string>,
  char?: string,
): string {
  let result = placeholderStr

  char = char || ':' // 默认占位符为冒号
  Object.keys(placeholders).forEach((key) => {
    const placeholder = char + `${key}`
    const value = placeholders[key]

    result = result.replace(placeholder, value)
  })
  return result
}

/**
 * @description 处理首字母大写 abc => Abc
 * @param str
 */
export const changeStr = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * @description 随机生成颜色
 * @param {string} type
 * @return {string}
 */
export const randomColor = (type: 'rgb' | 'hex' | 'hsl'): string => {
  switch (type) {
    case 'rgb':
      return window.crypto.getRandomValues(new Uint8Array(3)).toString()
    case 'hex':
      return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, `${Math.random() * 10}`)}`
    case 'hsl':
      // 在25-95%范围内具有饱和度，在85-95%范围内具有亮度
      return [360 * Math.random(), `${100 * Math.random()}%`, `${100 * Math.random()}%`].toString()
    default:
      return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, `${Math.random() * 10}`)}`
  }
}

/**
 * 复制文本
 * @param text
 */
export const copyText = (text: string) => {
  return new Promise((resolve) => {
    const copyInput = document.createElement('input') //创建一个input框获取需要复制的文本内容
    copyInput.value = text
    document.body.appendChild(copyInput)
    copyInput.select()
    document.execCommand('copy')
    copyInput.remove()
    resolve(true)
  })
}

/**
 * 对象转JSON
 * @param obj  对象
 * @returns {string} JSON字符串
 */
export const toJSON = (obj: any) => {
  return JSON.stringify(obj, (_, value) => {
    switch (true) {
      case typeof value === 'undefined':
        return 'undefined'
      case typeof value === 'symbol':
        return value.toString()
      case typeof value === 'function':
        return value.toString()
      default:
        break
    }
    return value
  })
}

/***
 * @description 格式化日期
 * @param time
 */
export const formatDate = (time: dayjs.ConfigType) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}
