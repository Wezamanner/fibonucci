 function fibs(num){
  let series=[];
   for(let i=0;i<num;i++){
        if(i==0){
            series.push(i)
        }else if(i==1){
            series.push(i)
        }
        else{
            let nextnumber=series[i-2]+series[i-1];
            series.push(nextnumber);
        }
    }
    return series;
}
console.log(fibs(9));


function fibsRec(num,i=0,series = []){
    if(num==0){
        return series;
    }else{
      
        if(i==0){
            series.push(i);
            i++
        }else if(i==1){
            series.push(i)
            i++
        }
        else{
            let nextnumber=series[i-2]+series[i-1];
            series.push(nextnumber);
            i++;
        }
      return  fibsRec(num-1,i,series);

    }
}
console.log(fibsRec(9));

export default fibs;