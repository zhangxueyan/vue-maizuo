/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
    if (!str) return ''
    var date = new Date(str)//new Date(那个格式的时间) 变成中国标准时间 new Date()
    console.log(date)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
    day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;
    return year+"-"+month+"-"+day;
}