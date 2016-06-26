var stu=require('./student');
var tech=require('./teacher');
// var du=stu.add('cuizhen');
// var te=tech.add('wangyijie');
// console.log(du);
// console.log(te);
function add(teachername,studentname){
	tech.add(teachername);
		stu.add(studentname);
}
exports.add=add;