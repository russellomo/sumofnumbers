/**
 * Created by russellomo on 2/5/17.
 */


const nums = [1, 2, 5, 6, 7];

function sumFor(nums)
{
    let sum = 0;

    for (const num of nums)
    {
        sum += num;
    }

    return sum;
}

function sumWhile(nums)
{
    let sum = 0;
    let i = 0;

    while(i < nums.length)
    {
      sum += nums[i];
      i++;
    }

    return sum;
}

function sumRecursion(nums)
{
    if(nums.length == 0)
    {
      return 0;
    }

    return nums[0] + sumRecursion(nums.slice(1, nums.length));

}

function sumTheSimpleWay(nums)
{
    return _.reduce(nums, function(memo, num) { return memo + num; }, 0);
}

console.log("sumFor returns " + sumFor(nums));

console.log("sumWhile returns " + sumWhile(nums));

console.log("sumRecursion returns " + sumRecursion(nums));

console.log("sumTheSimpleWay returns " + sumTheSimpleWay(nums));