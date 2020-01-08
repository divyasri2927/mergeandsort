function merge(c,d){
  for(var i=0;i<d.length;i++){
    c.push(d[i])
  }
return c.sort()
}
module.exports={merge}