import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { timeAgo } from '@/utils/util'

moment.locale('zh-cn')

Vue.filter('NumberFormat', function(value) {
  if (!value) {
    return '0'
  }
  // 将整数部分逢三一断
  return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
})

Vue.filter('dayjs', function(dataStr, pattern = 'YYYY-MM-DD HH:mm') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function(dataStr, pattern = 'YYYY-MM-DD HH:mm') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment_post_date', function(dataStr, pattern = '/YYYY/MM/') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment_post_day', function(dataStr, pattern = '/YYYY/MM/DD/') {
  return moment(dataStr).format(pattern)
})

Vue.filter('timeAgo', timeAgo)

Vue.filter('fileSizeFormat', function(value) {
  if (!value) {
    return '0 Bytes'
  }
  const unitArr = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  const srcsize = parseFloat(value)
  index = Math.floor(Math.log(srcsize) / Math.log(1024))
  let size = srcsize / Math.pow(1024, index)
  size = size.toFixed(2)
  return size + ' ' + unitArr[index]
})

Vue.filter('dayTime', function(value) {
  const days = Math.floor(value / 86400)
  const hours = Math.floor((value % 86400) / 3600)
  const minutes = Math.floor(((value % 86400) % 3600) / 60)
  const seconds = Math.floor(((value % 86400) % 3600) % 60)
  return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'
})
