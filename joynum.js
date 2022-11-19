var num=1729;
var temp=num.toString().split('');
var temparr=[];
for(i=0;i<temp.length;i++)
{
    temparr.push(+temp[i]);
}
//console.log(temparr);
var sum=0;
for(i=0;i<temparr.length;i++)
{
    sum=sum+temparr[i];
}
//console.log(sum);
var temp1=sum.toString().split('');
//console.log(temp1);
var temp2=''
for(i=temp1.length-1;i>=0;i--)
{
   //console.log(temp1[i]);
   temp2=temp2+temp1[i]
}
//console.log(temp2);
if(sum*temp2==num)
{
    console.log('same');
}
else
{
    console.log('not');
}

