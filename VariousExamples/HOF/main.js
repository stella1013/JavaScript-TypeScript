const courses = ['javascript', 'html', 'css', 'bootstrap'];

const arrOfCourses =[
    {id:1, name: 'html'},
    {id:2, name: 'javascript'},
    {id:3, name: 'css'}
]

courses.forEach((item, index, courses)=>{
    console.log(item + ' at index:'+index);
});
const courseName = arrOfCourses.filter((item)=> item.name === 'html');
console.log(courseName);