function create_grades_array() {
	var grades = new Array(4);
	return grades;
}

function calc_mean() {
	var grade1 = document.getElementById("grade1").value;
	var max1 = document.getElementById("max1").value;
	var grade2 = document.getElementById("grade2").value;
	var max2 = document.getElementById("max2").value;
	var grade3 = document.getElementById("grade3").value;
	var max3 = document.getElementById("max3").value;
	var grade4 = document.getElementById("grade4").value;
	var max4 = document.getElementById("max4").value;
	var mean = (grade1/max1 + grade2/max2 + grade3/max3 + grade4/max4) / 4;
	document.getElementById("resultnum").innerHTML = mean;
}

function calc_weighted() {
	var weight1 = document.getElementById("weight1").value;
	var grade1 = document.getElementById("grade1").value;
	var max1 = document.getElementById("max1").value;
	var weight1 = document.getElementById("weight2").value;
	var grade2 = document.getElementById("grade2").value;
	var max2 = document.getElementById("max2").value;
	var weight1 = document.getElementById("weight3").value;
	var grade3 = document.getElementById("grade3").value;
	var max3 = document.getElementById("max3").value;
	var weight1 = document.getElementById("weight4").value;
	var grade4 = document.getElementById("grade4").value;
	var max4 = document.getElementById("max4").value;
	var sumweights = weight1 + weight2 + weight3 + weight4;
	var weighted = (grade1/max1 * weight1 + grade2/max2 * weight2 + grade3/max3 * weight3 + grade4/max4 * weight4) / sumweights;
	document.getElementById("resultnum").innerHTML = weighted;
}

