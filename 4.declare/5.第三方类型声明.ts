// 默认只能通过import * as 这种语法导入
// import * as jQuery from 'jquery'
//使用下边这种的导入，需要设置esModuleInterop=true
// "f:/zfpx/5.ts_my/types/jquery/index"
import jQuery from 'jquery'
jQuery.ajax('/user/list', { method: 'get' })